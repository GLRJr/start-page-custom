import React from "react";
import styles from "./styles.module.css";

const LinkBox = () => {
  return (
    <div className={styles.webLinkContainer}>
      <div className={styles.box1}>
        <a href="https://www.youtube.com">YouTube</a>
        <a href="https://www.udemy.com">Udemy</a>
        <a href="https://www.funimation.com">Funimation</a>
      </div>
      <div className={styles.box2}>
        <a href="https://www.hackthissite.org">HackThisSite</a>
        <a href="https://www.pentesterlab.com/">Pentester Lab</a>
        <a href="https://www.zaproxy.org/docs/desktop/start/pentest/">ZAP Proxy</a>
      </div>
      <div className={styles.box3}>
      <a href="https://www.w3schools.com">W3 Schools</a>
        <a href="https://devdocs.io">Dev Docs</a>
        <a href="https://owasp.org/">OWASP</a>
      </div>
    </div>
  );
};

export default LinkBox;
