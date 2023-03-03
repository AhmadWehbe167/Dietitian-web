import Image from "next/image";
import { useState } from "react";
import styles from "../../assets/styles/footer.module.css";

export default function FooterItem({
  title,
  desc,
  child,
}: {
  title: string;
  desc: string;
  child?: JSX.Element[];
}) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div className={styles.footer__section}>
      <div className={styles["foooter__section-upper"]}>
        <span className={styles["footer__section-title"]}>{title}</span>
        <Image
          src="/icons/expand-arrow.svg"
          alt=""
          width={20}
          height={20}
          className={
            open
              ? `${styles["footer__section-icon"]} ${styles["footer__section-icon--rotate"]}`
              : styles["footer__section-icon"]
          }
          onClick={handleOpen}
        />
      </div>
      <div
        className={
          open
            ? `${styles["footer__section-lower"]} ${styles["footer__section-lower--invisible"]}`
            : styles["footer__section-lower"]
        }
      >
        {desc}
      </div>
      {child}
    </div>
  );
}
