import styles from "../styles/404.module.scss";
import Image from "next/image";
import Link from "next/link";
import rImage from "../public/404.png";

export default function error404() {
  return (
    <div className={styles.e404}>
      <div>
        <div>
          <h3> Таких анекдотов тут нет! </h3>
        </div>
        <div>
          <span>
            <Image src={rImage} alt=""></Image>
          </span>
          <p>
            Единственный анекдот тут это ты, вернись&nbsp;
            <Link href={"/"}>
              <a>назад</a>
            </Link>
            , бичара.
          </p>
        </div>
      </div>
    </div>
  );
}
