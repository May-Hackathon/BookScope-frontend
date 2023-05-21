import {useEffect, useState} from "react";
import {ScannerWrapper} from "@/components/barcode-reader/scanner-wrapper";
import {BookMetadata} from "@/@types/book-api";
import {BookDisplay} from "@/components/book-display/book-display.presenter";
import {PrimaryButton} from "@/components/buttons";

const ScanPage = () => {
  const [isbn,setIsbn] = useState<string|undefined>(undefined);
  const [metadata, setMetadata] = useState<BookMetadata>();
  useEffect(()=>{
    if(!isbn) return;
    (async()=>{
      const req = await fetch (`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
      const res = await req.json();
      console.log(res);
      setMetadata(res.items[0]);
    })();
  },[isbn]);
  if (!isbn){
    return <ScannerWrapper callback={setIsbn}/>
  }
  if (!metadata)
    return <div>loading...</div>
  return (<div>
    <BookDisplay metadata={metadata}/>
  </div>)
}
export default ScanPage;