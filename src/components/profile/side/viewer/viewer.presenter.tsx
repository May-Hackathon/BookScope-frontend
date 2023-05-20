import {User} from "@/@types/user";
import Styles from "./viewer.module.scss";
import Image from "next/image";
import {LinkIcon} from "@/assets/link";

type props = {
  user: User;
}

const ProfileViewer = ({user}: props) => {
  return <div className={Styles.wrapper}>
    <Image className={Styles.icon} src={user.icon} alt={""} width={256} height={256}/>
    <div className={Styles.name}>{user.name}</div>
    <div className={Styles.bio}>{user.bio}</div>
    {user.links.map((link, i) => <div key={i} className={Styles.linkWrapper}><LinkIcon className={Styles.linkIcon}/><a href={link} className={Styles.link}>{link}</a></div>)}
  </div>
}

export {ProfileViewer};