export default function ExtractionList(props) {
    const items = props.extractions.map( (extractions, index) => 
        <tr key={index}>{Object.values(extractions).map( (value, index) =>
            <td key = {index} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{value}</td>
        )}</tr>
    )
    const keys = Object.keys(props.extractions[0]).map((keys) => <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">{keys}</th>)
    console.log(items)
    return(
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                        {keys}
                    </tr>
                  </thead>
                  <tbody>
                    {items}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    );
}
