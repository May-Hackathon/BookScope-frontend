import Styles from "./tabs.module.scss";
import {AddressIcon} from "@/assets/address";
import {BookIcon} from "@/assets/book";
import {StatsIcon} from "@/assets/stats";

export type TabNames = "Overview" | "Stats" | "Bookshelf";

type props = {
  value: TabNames;
  onChange: (tab: TabNames) => void;
}

const tabs = ["Overview","Bookshelf","Stats"] as const;

const icons = {
  "Overview": AddressIcon,
  "Bookshelf": BookIcon,
  "Stats": StatsIcon,
}

const Tabs = ({value,onChange}: props) => {
  return <div className={Styles.wrapper}>
    {tabs.map((tab)=>{
      const Icon = icons[tab];
      return <div key={tab} className={`${Styles.tab} ${value === tab && Styles.active}`} onClick={()=>onChange(tab)}>
        <Icon className={Styles.icon}/>
        <span className={Styles.text}>{tab}</span>
      </div>
    })}
  </div>
}

export {Tabs};