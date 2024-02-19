import useUser from "../hooks/useUser.ts";

import Container from "../components/shared/ui/Container/Container.tsx";
import ProfileSubHeader from "../components/profile/ProfileSubHeader/ProfileSubHeader.tsx";
import ProfileSettings from "../components/profile/ProfileSettings/ProfileSettings.tsx";

const Profile = () => {
  const { user } = useUser();

  if (!user) return;

  return (
    <div>
      <Container size="md">
        <ProfileSubHeader name={user.username} date={"February 2024"} />
        <ProfileSettings user={user} />
      </Container>
    </div>
  );
};

export default Profile;
