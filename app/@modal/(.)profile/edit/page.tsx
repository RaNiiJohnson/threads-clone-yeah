import { getUserEdit } from "@/src/query/user.query";
import { EditProfileModal } from "./EditProfileModal";
import { editProfile } from "@/app/profile/edit/efit-profile.action";

export default async function page() {
  const user = await getUserEdit();

  return <EditProfileModal user={user} editProfile={editProfile} />;
}
