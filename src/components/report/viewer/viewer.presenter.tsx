import Styles from "./viewer.module.scss";
import {Card} from "@/components/card/card.presenter";
import {Report} from "@/@types/report";
import {Textarea} from "@/components/report/textarea/textarea.presenter";

type props = {
  report: Report&{pinned?: boolean};
}

const ReportViewer = ({report}: props) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.header}>
        <Card type={"horizontal"} report={report}/>
      </div>
      <Textarea content={report.content} readonly/>
    </div>
  )
}

export {ReportViewer};