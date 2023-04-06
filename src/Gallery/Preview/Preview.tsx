import { FC, useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./Preview.module.scss";
import { PreviewProps } from "../types";

const Preview: FC<PreviewProps> = ({
  className,
  pictures,
  activePictureIndex,
}) => {
  const previewTrackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!previewTrackRef.current) return;

    previewTrackRef.current.style.transform = `translate3d(-${
      activePictureIndex * 164
    }px,0,0)`;
  }, [activePictureIndex]);

  return (
    <div className={cn(className, styles.preview)}>
      <ul
        className={styles.previewTrack}
        ref={previewTrackRef}
      >
        {pictures.map((picture) => (
          <li
            className={styles.previewItem}
            key={picture.id}
          >
            <img
              className={styles.previewImg}
              src={picture.preview}
            />
          </li>
        ))}
      </ul>
      <div className={styles.previewCover}>
        {activePictureIndex + 1}/{pictures.length}
      </div>
    </div>
  );
};

export default Preview;
