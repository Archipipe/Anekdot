import Link from "next/link";
import Image from "next/image";
import rjevsky from "../public/rjevski.jpg";
import styles from "../styles/gs.module.scss";

export default function Index() {
  return (
    <>
      <div className={styles.GS}>
        <nav>
          <Link href="/rjevsky">
            <a>
              <Image src={rjevsky} alt="" />
            </a>
          </Link>
          <Link href="/rjevsky">
            <a>
              <Image src={rjevsky} alt="" />
            </a>
          </Link>
        </nav>
      </div>
    </>
  );
}
