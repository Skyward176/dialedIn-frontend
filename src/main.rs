#[macro_use] extern crate rocket;


use rocket_dyn_templates::Template;
use rocket_dyn_templates::context;
use rocket::fs::FileServer;

#[get("/")]
fn index() -> Template{ //render the index template with the following state/context
    Template::render("base", context! {
        title:"dialedIn",
        content: "Welcome to dialedIn!",
    })
}

#[launch]
fn rocket() -> _ {
    rocket::build()
    .mount("/", routes![index])
    .mount("/css", FileServer::from("static/css"))
    .attach(Template::fairing())
}