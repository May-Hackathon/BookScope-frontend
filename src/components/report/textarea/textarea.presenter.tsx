import Styles from "./textarea.module.scss";
import {useEffect, useRef, useState} from "react";

type props = {
  readonly?: boolean;
  content: string;
  onChange?: (content: string) => void;
}

const Textarea = ({readonly,content,onChange}:props) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = useState(200);
  useEffect(()=>{
    if (!ref.current) return;
    const resizeObserver = new ResizeObserver(entries => {
      setHeight(ref.current?.scrollHeight||200);
    });
    resizeObserver.observe(ref.current);
    return ()=>{
      resizeObserver.disconnect();
    }
  },[ref,content]);
  return (
    <textarea onChange={(e)=>onChange&&onChange(e.target.value)} readOnly={readonly} className={Styles.textarea} ref={ref} style={{height}} value={content} />
  )
}

export {Textarea}