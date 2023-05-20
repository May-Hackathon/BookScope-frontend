import Styles from "./editor.module.scss";
import {Report} from "@/@types/report";
import {Textarea} from "@/components/report/textarea/textarea.presenter";
import {useState} from "react";
import {PrimaryButton, SecondlyButton} from "@/components/buttons/buttons";
import {TagEditor} from "@/components/report/editor/tag-editor/tag-editor.presenter";



type props = {
  report: Report&{pinned?: boolean;isMyPost?: boolean};
  onSave?: (data: {content: string,tags: string[]}) => void;
  onCancel?: () => void;
}

const ReportEditor = ({report,onCancel,onSave}: props) => {
  const [data,setData] = useState(report.content);
  const [tags, setTags] = useState(report.tags);
  
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.control}>
        <SecondlyButton onClick={onCancel}>Cancel</SecondlyButton>
        <PrimaryButton onClick={()=>onSave&&onSave({content:data,tags})}>Save</PrimaryButton>
      </div>
      <div className={Styles.tag}>
        <TagEditor tags={tags} onChange={setTags}/>
      </div>
      <div className={Styles.container}>
        <Textarea content={data} onChange={setData}/>
      </div>
    </div>
  )
}
export {ReportEditor};