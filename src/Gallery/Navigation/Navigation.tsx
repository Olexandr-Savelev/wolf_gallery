import { FC } from "react";
import { NavigationProps } from "../types";
import styles from "./Navigation.module.scss";
import cn from "classnames";

const Navigation: FC<NavigationProps> = ({
  className,
  disableNextPicture,
  disablePrevPicture,
  onNextPicture,
  onPrevPicture,
}) => {
  return (
    <div className={cn(className, styles.navigation)}>
      <button
        className={cn(styles.navigationBtn, styles.navigationBtnPrev)}
        disabled={disablePrevPicture}
        onClick={onPrevPicture}
      ></button>
      <button
        className={cn(styles.navigationBtn, styles.navigationBtnNext)}
        disabled={disableNextPicture}
        onClick={onNextPicture}
      ></button>
    </div>
  );
};

export default Navigation;
