import {useState} from "react";
import {User} from "@/@types/user";
import {ProfileEditor} from "@/components/profile/side/editor";
import {ProfileViewer} from "@/components/profile/side/viewer";
import {SecondlyButton} from "@/components/buttons";
import Styles from "./sidebar.module.scss";

type props = {
  user: User;
  isMe: boolean;
}

const Sidebar = ({user:originalUser,isMe}:props) => {
  const [isEdit, setIsEdit] = useState(false)
  const [user,setUser] = useState(originalUser);

  const save = (user: User) => {
    setUser(user);
    //todo: post user data;
    setIsEdit(false);
  }

  if (isEdit){
    return <ProfileEditor user={user} onCancel={()=>setIsEdit(false)} onSave={save}/>;
  }

  return <div className={Styles.wrapper}>
    <ProfileViewer user={user}/>
    {isMe && <SecondlyButton onClick={()=>setIsEdit(true)}>Edit</SecondlyButton>}
  </div>
}

export {Sidebar}