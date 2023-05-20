import {User} from "@/@types/user";
import Styles from "./editor.module.scss";
import Image from "next/image";
import {LinkIcon} from "@/assets/link";
import {useState} from "react";
import {PrimaryButton, SecondlyButton} from "@/components/buttons";

type props = {
  user: User;
  onCancel?: () => void;
  onSave?: (user: User) => void;
}

const ProfileEditor = ({user: originalUser,onCancel,onSave}: props) => {
  const [user,setUser] = useState(originalUser);
  
  const changeIcon = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.item(0);
      if(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if(e.target?.result) {
            setUser({...user,icon:e.target.result as string})
          }
        }
        reader.readAsDataURL(file);
      }
    }
    input.click();
  }
  
  return <div className={Styles.wrapper}>
    <Image className={Styles.icon} src={user.icon} alt={""} width={256} height={256} onClick={changeIcon}/>
    <div className={Styles.name}>
      <span>Name</span>
      <input type="text" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} className={Styles.input}/>
    </div>
    <div className={Styles.bio}>
      <span>Bio</span>
      <textarea value={user.bio} onChange={(e)=>setUser({...user,bio:e.target.value})} className={`${Styles.input} ${Styles.textarea}`}/>
    </div>
    {user.links.map((link, i) => <div key={i} className={Styles.linkWrapper}><LinkIcon className={Styles.linkIcon}/><input className={`${Styles.link} ${Styles.input}`} value={link} onChange={(e)=> {
      user.links[i] = e.target.value;
      setUser({...user})
    }}/></div>)}
    <div className={Styles.buttons}>
      <SecondlyButton onClick={onCancel}>Cancel</SecondlyButton>
      <PrimaryButton onClick={()=>onSave&&onSave(user)}>Save</PrimaryButton>
    </div>
  </div>
}

export {ProfileEditor};