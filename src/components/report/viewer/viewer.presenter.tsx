import Styles from "./viewer.module.scss";
import {Card} from "@/components/card/card.presenter";
import {Report} from "@/@types/report";
import {Textarea} from "@/components/report/textarea/textarea.presenter";
import {Edit} from "@/assets/edit";
import Link from "next/link";

type props = {
  report: Report&{pinned?: boolean;isMyPost?: boolean};
}

const ReportViewer = ({report}: props) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.header}>
        <Card type={"horizontal"} report={report}/>
      </div>
      <div className={Styles.container}>
        <Textarea content={report.content} readonly/>
        {report.isMyPost&&<Link href={""} className={Styles.edit}><Edit className={Styles.editIcon} fill={"white"}/></Link>}
      </div>
    </div>
  )
}

export {ReportViewer};