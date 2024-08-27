import { useEffect, useState } from "react";
import "./DiaryEntry.css";
import axios from "axios"

const DiaryEntry = ({change, setChange}) => {

    const [entry,setEntry] = useState([])

    useEffect(()=>{
        loadEntries();
        setChange('0')
    
         
    },[change]);

    const loadEntries=async()=>{
        const result =await axios.get("http://localhost:8080/entry");
        setEntry(result.data)
        console.log(result.data);
    }

    const deleteEntry = async(id)=>{
        axios.delete("http://localhost:8080/entry/"+id);
        console.log(id);
        setChange('1');
    }

    return(
        <div className = "flex-col flex w-9/12" id = "content--container">
            {entry.toReversed().map((entry) =>(
                <div className = "justify-between flex flex-row" id = "content--text">
                    <div className="content--block flex" id={entry.id} >
                        <div id = "id--child"className="content--title">
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
                    <div className="justify-end">
                        <span onClick = {() => deleteEntry(entry.id)} id ={entry.id} className="delete--icon material-symbols-outlined" >delete</span>
                    </div>
                </div>  
            ))}
        </div>
    )
}

export default DiaryEntry;