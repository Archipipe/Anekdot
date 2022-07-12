import Link from "next/link";
import Image from "next/image";
import rjevsky from "../public/rjevski.png";
import shtirlic from "../public/shtirlic.png";
import styles from "../styles/gs.module.scss";

export default function Index() {
  return (
    <>
      <div className={styles.GS}>
        <div className={styles["top-text"]}>
          <span>Выбери свои анекдоты</span>
        </div>
        <nav>
          <Link href="/rjevsky">
            <a>
              <Image src={rjevsky} alt="" />
            </a>
          </Link>
          <Link href="/shtirlic">
            <a>
              <Image src={shtirlic} alt="" />
            </a>
          </Link>
        </nav>
      </div>
    </>
  );
}
