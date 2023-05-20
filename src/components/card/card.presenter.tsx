import type {Report} from "@/@types/report";
import {Thumbnail} from "@/components/thumbnail/thumbnail.presenter";
import Styles from "./card.module.scss";
import {ReactNode} from "react";

const Tag = ({children}: {children: ReactNode}) => {
  return <div className={Styles.tag}>{children}</div>
}

type Props = {
  type: "vertical" | "horizontal";
  report: Report&{pinned?: boolean};
}

const Card = ({type,report}: Props) => {
  return <div className={`${Styles.wrapper} ${Styles[type]}`}>
    <Thumbnail book={report.book} pinned={report.pinned}/>
    <div className={Styles.container}>
      <h1 className={Styles.title}>{report.title}</h1>
      <div className={Styles.tags}>
        {report.tags.map((tag)=><Tag key={tag}>{tag}</Tag>)}
      </div>
    </div>
  </div>
}

export {Card};