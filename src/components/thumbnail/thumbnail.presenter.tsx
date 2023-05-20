import Image from 'next/image';
import {Book} from "@/@types/book";
import Styles from "./thumbnail.module.scss";
import {Pin} from "@/assets/pin";

type props = {
  book: Book;
  pinned?: boolean;
}

const Thumbnail = ({book,pinned}: props) => {
  return <div className={Styles.wrapper}>
    <div className={Styles.imageWrapper}>
      <Image className={Styles.image} src={`https://iss.ndl.go.jp/thumbnail/${book.isbn}`} fill alt={""}/>
    </div>
    <div className={Styles.meta}>
      <h2 className={Styles.title}>{book.title}</h2>
      <div>{book.author}</div>
      <Pin className={Styles.pin} fill={pinned?"#8FBB9F":"white"}/>
    </div>
  </div>
}

export {Thumbnail}