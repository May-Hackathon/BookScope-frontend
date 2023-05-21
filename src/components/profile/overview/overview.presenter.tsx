import {Report} from "@/@types/report";
import {Card} from "@/components/card";
import Styles from "./overview.module.scss";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import {Heatmap} from "@/@types/heatmap";
import {Activity} from "@/@types/activity";
import {ActivityDisplay} from "@/components/profile/overview/activity/activity.presenter";

type props = {
  userProfile?: Report;
  pinned: Report[];
  heatmap: Heatmap;
  activity: Activity;
}

const Overview = ({userProfile,pinned,heatmap,activity}:props) => {
  return (
    <div className={Styles.wrapper}>
      {userProfile&&<div className={`${Styles.profile} ${Styles.card}`}>{userProfile.content}</div>}
      <div className={Styles.pinnedWrapper}>
        <span>Pinned</span>
        <div className={`${Styles.pinned} ${Styles.card}`}>
          {pinned.map((report,i) => <Card report={{...report,pinned: true}} key={report.id} type={"vertical"}/>)}
        </div>
      </div>
      <div>
        <span>Heatmap</span>
        <div className={Styles.heatmap}>
          <CalendarHeatmap values={heatmap}/>
        </div>
      </div>
      <div>
        <span>Activity</span>
        <ActivityDisplay activity={activity}/>
      </div>
    </div>
  )
}

export {Overview};