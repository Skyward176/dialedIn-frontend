import Navbar from "../components/Navbar"
import axios from "axios";
import {useCookies} from 'react-cookie';
import {useEffect, useState} from 'react'
import {useTokenContext} from '../components/TokenContext'
export default function history() {
    let baseURL = 'http://localhost:8000';

    const [cookies] = useCookies();

    const tokenPreflight = useTokenContext();

    const [extractions, setExtractions] = useState(0);
    useEffect(() => {
        tokenPreflight()
        axios.get(baseURL + '/extractions/', {
            headers: {
                'Authorization': `Bearer ${cookies['access']}`,
                'Content-Type': 'application/json'
            }
        }).then((res)=> {
            let data = res.data.results
            setExtractions(data);
            return data;
        });
    }, []);
    return(
        <>
            <Navbar/>
            {extractions.map(data => {
                <li>
                    {data.extraction_id}
                </li>
            })}
        </>
    )
}
