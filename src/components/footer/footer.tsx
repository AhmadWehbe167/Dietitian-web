/* eslint-disable @next/next/no-img-element */
import { adminInfo } from "../../constants/admin";
import FooterItem from "./footerItem";
import styles from "../../assets/styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__body}>
        <div className={styles.footer__upper}>
          <FooterItem
            title={"About Us"}
            desc={
              "My passion for helping others achieve their goals began years ago and has only grown stronger with each passing year."
            }
          />
          <FooterItem
            title={"Contact Info"}
            desc={`Address: city ,Tyre, Lebanon
            Phone: +961 70 693 927 
            info@domain.com `}
          />
          <FooterItem
            title={"Book Session"}
            desc={`Online
                 Tyre`}
          />
          <FooterItem
            title={"Plans"}
            desc={`Free
                 Basic
                 Premium`}
          />
        </div>
        <hr className={styles.footer__seperator} />
        <div className={styles.footer__lower}>
          <span className={`${styles.footer__copyright}`}>
            Copyright @2023 All rights reserved | This template is made by Ahmad
            Wehbe
          </span>
          <div className={styles["footer__social-links"]}>
            <a href="https://www.facebook.com/by.safanasr">
              <img src="/icons/facebook.svg" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/sweetiepies_bysafa/">
              <img src="/icons/instagram.svg" alt="instagram" />
            </a>
            {/* TODO: add business phone number here */}
            <a href={`https://wa.me/${adminInfo.phoneNumber}`}>
              <img src="/icons/whatsapp.svg" alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
