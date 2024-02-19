import { FC } from "react";

import styles from "./ProfileSubHeader.module.scss";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../config/routes.ts";

interface IProfileSubHeader {
  image?: string;
  name: string;
  date?: string;
}

const ProfileSubHeader: FC<IProfileSubHeader> = ({ image, name, date }) => {
  return (
    <div className={styles["sub-header"]}>
      <NavLink to={ROUTES.PROFILE} className={styles["image-wrap"]}>
        <img className={styles["image"]} src={image} alt="" />
      </NavLink>
      <div className={styles["text"]}>
        <h2 className={styles["title"]}>{name}</h2>
        <p className={styles["description"]}>Nike Member Since {date}</p>
      </div>
    </div>
  );
};

export default ProfileSubHeader;
