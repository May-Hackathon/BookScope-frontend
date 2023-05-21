import Image from "next/image";
import {BookMetadata} from "@/@types/book-api";
import Styles from "./book-display.module.scss"
import {PrimaryButton} from "@/components/buttons";

type props = {
  metadata: BookMetadata
}

const BookDisplay = ({metadata}: props) => {
  return <div className={Styles.wrapper}>
    {metadata.volumeInfo.imageLinks?<div className={Styles.imageWrapper}><Image className={Styles.image} src={metadata.volumeInfo.imageLinks.thumbnail} alt={""} fill/></div>:<p>画像なし</p>}
    <div>
      <h2 className={Styles.title}>{metadata.volumeInfo.title}</h2>
      <h3>{metadata.volumeInfo.subtitle}</h3>
    </div>
    <p>{metadata.volumeInfo.description}</p>
    <PrimaryButton>この本の感想分を書く</PrimaryButton>
  </div>
}

export {BookDisplay}