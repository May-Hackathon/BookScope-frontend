import {useRouter} from "next/router";
import {Profile} from "@/components/profile/profile.presenter";
import {mockActivity, mockHeatmap, mockReport, mockStats, mockUser} from "@/mockdata/report";

const ProfilePage = () => {
  const router = useRouter();
  const query = router.query.id;
  if (typeof query !== "string") {
    return <></>;
  }
  return <Profile pinned={[mockReport]} activity={mockActivity} heatmap={mockHeatmap} isMe={true} shelf={[mockReport]} stats={mockStats} user={mockUser}/>;
  
}

export default ProfilePage;