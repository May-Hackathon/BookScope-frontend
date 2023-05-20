import {Activity} from "@/@types/activity";
import Styles from "./activity.module.scss";

const Month = [
  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
]

const ActivityDisplay = ({activity}: {activity: Activity}) => {
  return <div className={Styles.wrapper}>
    {activity.map((activity,i) => {
      const date = new Date(activity.month);
      return <div key={activity.month} className={Styles.container}>
        <div className={Styles.row}>
          <span className={Styles.month}>{Month[date.getMonth()]}</span>
          <span className={Styles.year}>{date.getFullYear()}</span>
          <div className={Styles.hr}></div>
        </div>
        {activity.item.map((data,i) => <div key={i} className={Styles.item}>
          <span className={Styles.line}></span>
          <p>{data}</p>
        </div>)}
      </div>
    })}
  </div>
}

export {ActivityDisplay};