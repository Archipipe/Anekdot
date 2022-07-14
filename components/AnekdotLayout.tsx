interface Props {
  children: React.ReactNode;
}

import arrRight from "../public/arrRight.png";
import arrLeft from "../public/arrLeft.png";

import Image from "next/image";
import styles from "../styles/anekdot.module.scss";
export const AnekdotLayout = ({ children }: Props) => {
  return (
    <>
      <div className={styles.anekdot}>
        <div>
          <nav>
            <span>
              <Image src={arrLeft} alt="" />
            </span>
            <span>
              <Image src={arrRight} alt="" />
            </span>
          </nav>
          <div>{children}</div>
          <div>
            <span>
              <input
                type="radio"
                id="AnekdotType1"
                name="contact"
                value="AnekdotType1"
                checked
              />
              <label htmlFor="AnekdotType1">На трезвую голову</label>
            </span>

            <span>
              <input
                type="radio"
                id="AnekdotType2"
                name="contact"
                value="AnekdotType2"
              />
              <label htmlFor="AnekdotType2">Минус бутылочка</label>
            </span>

            <span>
              <input
                type="radio"
                id="AnekdotType3"
                name="contact"
                value="AnekdotType3"
              />
              <label htmlFor="AnekdotType3">Состояние вертолётиков</label>
            </span>

            <span>
              <input
                type="radio"
                id="AnekdotType4"
                name="contact"
                value="AnekdotType4"
              />
              <label htmlFor="AnekdotType4">Еба шатает нахуй</label>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
