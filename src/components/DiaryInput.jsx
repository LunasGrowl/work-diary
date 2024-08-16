import React from "react";
import { useState } from "react";
import "./DiaryInput.css";
import axios from "axios";

const today = new Date();

function getDate(){
    const day = today.getDate();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
    
}

const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

function getDay(){
    return dayOfWeek[today.getDay()];
}

const DiaryInput = () => {
    const[currentDate] = useState(getDate());
    const[currentDay] = useState(getDay());
    
    
    const [entry,setEntry] = useState({
        entry_date:getDate(),
        entry_day:getDay(),
        entry_content:""
    })
    const {entry_date,entry_day,entry_content} = entry
    const onInputChange = (e) => {
        setEntry({...entry,[e.target.name]:e.target.value})
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/entry/add",entry)
    }


    return(
        <div id="form--block">
            <h2>{entry_content}</h2>
            <form onSubmit={(e)=> onSubmit(e)}>
                <div id = "form--heading">
                    <label>What did you do?</label>
                    <p value = {entry_day} name = "entry_day" >{currentDay}</p>
                    <p value = {entry_date} name = "currentDate">{currentDate}</p>
                </div>
                <input id="form--input" value={entry_content} name = "entry_content" type="text" onChange={(e)=>onInputChange(e)}/>
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default DiaryInput;