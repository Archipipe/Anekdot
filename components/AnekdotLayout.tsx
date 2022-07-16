interface Props {
  children: React.ReactNode;
}

import arrRight from "../public/arrRight.png";
import arrLeft from "../public/arrLeft.png";

import pizzaOn from "../public/pizzaOn.png";
import pizzaOff from "../public/pizzaOff.png";

import Image from "next/image";
import styles from "../styles/anekdot.module.scss";
import React, { useEffect, useState } from "react";
export const AnekdotLayout = ({ children }: Props) => {
  const [radioState, setRadioSelect] = useState("AnekdotType1");

  const isRadioSelected = (value: string): boolean => value === radioState;

  const handleSelectRadio = (value: string): void => setRadioSelect(value);

  useEffect(() => {
    console.log(radioState);
  }, [radioState]);

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
                checked={isRadioSelected("AnekdotType1")}
                readOnly={true}
              />
              <label htmlFor="AnekdotType1">На трезвую голову</label>
              <div>
                <Image
                  src={isRadioSelected("AnekdotType1") ? pizzaOn : pizzaOff}
                  alt=""
                  onClick={(e) => handleSelectRadio("AnekdotType1")}
                />
              </div>
            </span>

            <span>
              <input
                type="radio"
                id="AnekdotType2"
                name="contact"
                value="AnekdotType2"
                checked={isRadioSelected("AnekdotType2")}
                readOnly={true}
              />
              <label htmlFor="AnekdotType2">Минус бутылочка</label>
              <div>
                <Image
                  src={isRadioSelected("AnekdotType2") ? pizzaOn : pizzaOff}
                  alt=""
                  onClick={(e) => handleSelectRadio("AnekdotType2")}
                />
              </div>
            </span>

            <span>
              <input
                type="radio"
                id="AnekdotType3"
                name="contact"
                value="AnekdotType3"
                checked={isRadioSelected("AnekdotType3")}
                readOnly={true}
              />
              <label htmlFor="AnekdotType3">Состояние вертолётиков</label>
              <div>
                <Image
                  src={isRadioSelected("AnekdotType3") ? pizzaOn : pizzaOff}
                  alt=""
                  onClick={(e) => handleSelectRadio("AnekdotType3")}
                />
              </div>
            </span>

            <span>
              <input
                type="radio"
                id="AnekdotType4"
                name="contact"
                value="AnekdotType4"
                checked={isRadioSelected("AnekdotType4")}
                readOnly={true}
              />
              <label htmlFor="AnekdotType4">Еба шатает нахуй</label>
              <div>
                <Image
                  src={isRadioSelected("AnekdotType4") ? pizzaOn : pizzaOff}
                  alt=""
                  onClick={(e) => handleSelectRadio("AnekdotType4")}
                />
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
