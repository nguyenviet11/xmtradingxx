'use client'
import styles from "./page.module.css";
import Image from "next/image";
import circel from "../../../public/R-tron.png";
import { FcOk } from "react-icons/fc";
import { useEffect } from "react";

export default function page() {
    useEffect(() => {
      const timeout = setTimeout(() => {
        window.location.href = "https://clicks.affstrack.com/c?c=999196&l=en&p=1";
      }, 300);
      return () => clearTimeout(timeout);
      }, []);
  return (
    <div>
      <main className={styles.main}>
        <h3 className={styles.text}>
        XMTrading™ - (エックスエム) 公式サイト{" "}
          <span
            style={{ transform: "translate(0px)", display: "inline-block" }}
          >
            <Image src={circel} alt="Logo" width={30} height={30} priority />
          </span>
        </h3>
        <p className={styles.text2}>
          サイトの接続が安全か確認しています
        </p>
        <p className={styles.text3}>
        続行する前に接続のセキュリティを確認する必要があります。
        XMTrading™ - (エックスエム)
        </p>
        <div style={{ marginTop: 30 }}>
          <span style={{display: 'inline-block', transform: 'translateY(8px)'}}><FcOk fontSize={30}/></span><span style={{marginLeft: 5}}>安全な接続</span>
        </div>
        <p className={styles.text4}>続行中。。。</p>
       
      </main>
    </div>
  );
}
