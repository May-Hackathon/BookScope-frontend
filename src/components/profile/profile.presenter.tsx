import {useState} from "react";
import {Overview} from "@/components/profile/overview/overview.presenter";
import {Stats} from "@/components/profile/stats/stats.presenter";
import {Bookshelf} from "@/components/profile/bookshelf/bookshelf.presenter";
import Styles from "./profile.module.scss"
import {TabNames, Tabs} from "@/components/profile/tabs/tabs.presenter";
import {Report} from "@/@types/report";
import {Heatmap} from "@/@types/heatmap";
import {Activity} from "@/@types/activity";
import {User} from "@/@types/user";
import {Sidebar} from "@/components/profile/side/sidebar.presenter";

type props = {
  user: User;
  isMe: boolean;
  pinned: Report[];
  heatmap: Heatmap;
  activity: Activity;
  shelf: Report[];
  stats: {
    bookCount: number;
    reportCount: number;
    totalPrice: number;
    totalPage: number;
  }
}

const Profile = ({user,isMe,pinned,heatmap,activity,shelf,stats}:props) => {
  const [tab,setTab] = useState<TabNames>("Overview");

  const body = (()=>{
    if (tab === "Overview") {
      return <Overview pinned={pinned} heatmap={heatmap} activity={activity}/>
    }else if(tab === "Stats") {
      return <Stats {...stats}/>
    }else if(tab === "Bookshelf") {
      return <Bookshelf reports={shelf}/>
    }
  })();
  return <div className={Styles.wrapper}>
    <Sidebar user={user} isMe={isMe}/>
    <div className={Styles.main}>
      <Tabs value={tab} onChange={setTab}/>
      <div className={Styles.container}>
        {body}
      </div>
    </div>
  </div>
}

export {Profile}