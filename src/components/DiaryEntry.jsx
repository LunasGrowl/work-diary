import DiaryContent from "./DiaryContent";
import "./DiaryEntry.css";

const DiaryEntry = () => {

    return(
        <div>
        {DiaryContent.map(DiaryContent =>(
            <div className="content--block">
                <div className="content--title">
                    <h3>{DiaryContent.Day}</h3>
                    <p className="content--date">{DiaryContent.Date}</p>
                </div>
                <p>{DiaryContent.Text}</p>
            </div>   
        ))}
        </div>
    )
}

export default DiaryEntry;