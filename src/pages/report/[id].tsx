import {useRouter} from "next/router";
import {mockReport} from "@/mockdata/report";
import {ReportEditor} from "@/components/report/editor";
import {ReportViewer} from "@/components/report/viewer";
import {useState} from "react";

const ReportPage = () => {
  const router = useRouter();
  const query = router.query.id;
  const isEdit = !!router.query.edit;
  const [report,setReport] = useState(mockReport);
  if (typeof query !== "string") {
    return <></>;
  }
  const save = ({content,tags}:{content: string, tags: string[]}) => {
    setReport({...report,content,tags});
    console.log(router)
    router.push(`${location.pathname}`);
  }
  if (isEdit){
    return <ReportEditor report={report} onCancel={()=>router.push(`${location.pathname}`)} onSave={save} />;
  }
  return <ReportViewer report={{...report,isMyPost:true}} />;
  
}

export default ReportPage;