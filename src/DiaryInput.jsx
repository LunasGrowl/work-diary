import React from "react";
import { useState } from "react";
import "./DiaryInput.css";


function getDate(){
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
    
}

const DiaryInput = () => {
    const[currentDate] = useState(getDate());


    return(
        <div id="form--block">
            <form>
                <div id = "form--heading">
                    <label>What did you do?</label>
                    <p>{currentDate}</p>
                </div>
                <input id="form--input" type="text"/>
            </form>
        </div>
    )
}

export default DiaryInput;