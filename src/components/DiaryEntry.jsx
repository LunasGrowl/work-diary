import { useEffect, useState } from "react";
import "./DiaryEntry.css";
import axios from "axios"

const DiaryEntry = () => {

    const [entry,setEntry] = useState([])

    useEffect(()=>{
         loadEntries();
    },[]);

    const loadEntries=async()=>{
        const result =await axios.get("http://localhost:8080/entry");
        setEntry(result.data)
        console.log(result.data);
    }

    return(
        <div>
        {entry.toReversed().map((entry) =>(
            <div className="content--block" id={entry.id} >
                <div className=" content--title">
                    <h3 className="font-semibold">{entry.entry_day}</h3>
                    <p className="content--date">{entry.entry_date}</p>
                </div>
                <div id="content--content">
                    <p>{entry.entry_content.split("-")[0]}</p>
                    <ul className="text-left">
                        {entry.entry_content.split("-").slice(1).map(split =>(
                            <li className="italic">{split}</li>
                        ))}
                    </ul>
                </div>
            </div>   
        ))}
        </div>
    )
}

export default DiaryEntry;