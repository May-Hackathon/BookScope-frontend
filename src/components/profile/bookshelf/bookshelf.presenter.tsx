import {Report} from "@/@types/report";
import {Card} from "@/components/card";
import Styles from "./bookshelf.module.scss";

type props = {
  reports: Report[];
}

const Bookshelf = ({reports}:props) => {
  return <div className={Styles.wrapper}>
    {reports.map((report,i) => <Card report={report} type={"vertical"} key={i}/>)}
  </div>
}

export {Bookshelf};