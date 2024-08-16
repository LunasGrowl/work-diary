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
        {entry.map((entry) =>(
            <div className="content--block" id={entry.id} >
                <div className="content--title">
                    <h3>{entry.entry_day}</h3>
                    <p className="content--date">{entry.entry_date}</p>
                </div>
                <p>{entry.entry_content}</p>
            </div>   
        ))}
        </div>
    )
}

export default DiaryEntry;