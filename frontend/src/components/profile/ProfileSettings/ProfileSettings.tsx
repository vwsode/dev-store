import TextField from "../../shared/ui/TextField/TextField.tsx";
import { FC } from "react";
import { User } from "../../../types/types";

import styles from "./ProfileSettings.module.scss";
import Button from "../../shared/ui/Button/Button.tsx";

interface IProfileSettings {
  user: User;
}

const ProfileSettings: FC<IProfileSettings> = ({ user }) => {
  return (
    <section className={styles["settings"]}>
      <h2 className={styles["title"]}>Settings</h2>
      <div className={styles["content"]}>
        <form className={styles["form"]}>
          <TextField
            readOnly={true}
            value={user.email}
            type="email"
            placeholder="Email"
          />
          <TextField
            readOnly={true}
            value={user.username}
            type="text"
            placeholder="User name"
          />
          <TextField readOnly={true} placeholder="Password" />
          <Button variant="dark" rounded={false}>
            Edit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ProfileSettings;
