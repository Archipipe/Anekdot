interface Props {
  children: React.ReactNode;
}

import arrRight from "../public/arrRight.png";
import arrLeft from "../public/arrLeft.png";

import pizzaOn from "../public/pizzaOn.png";
import pizzaOff from "../public/pizzaOff.png";

import Image from "next/image";
import styles from "../styles/anekdot.module.scss";
import React, { useEffect, useState, useContext } from "react";
import { AnekdotContext, AnekdotType } from "./context";

export const AnekdotLayout = ({ children }: Props) => {
  const [radioState, setRadioState] = useState<AnekdotType>(
    AnekdotType.AnekdotType1
  );
  const { Anekdot, setAnekdot } = useContext(AnekdotContext);

  useEffect(() => {
    setAnekdot(radioState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radioState]);
  const isRadioSelected = (value: AnekdotType): boolean => value === radioState;

  const handleSelectRadio = (value: AnekdotType): void => setRadioState(value);

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
                checked={isRadioSelected(AnekdotType.AnekdotType1)}
                readOnly={true}
              />
              <label htmlFor="AnekdotType1">На трезвую голову</label>
              <div>
                <Image
                  src={
                    isRadioSelected(AnekdotType.AnekdotType1)
                      ? pizzaOn
                      : pizzaOff
                  }
                  alt=""
                  onClick={(e) => handleSelectRadio(AnekdotType.AnekdotType1)}
                />
              </div>
            </span>

            <span>
              <input
                type="radio"
                id="AnekdotType2"
                name="contact"
                value="AnekdotType2"
                checked={isRadioSelected(AnekdotType.AnekdotType2)}
                readOnly={true}
              />
              <label htmlFor="AnekdotType2">Минус бутылочка</label>
              <div>
                <Image
                  src={
                    isRadioSelected(AnekdotType.AnekdotType2)
                      ? pizzaOn
                      : pizzaOff
                  }
                  alt=""
                  onClick={(e) => handleSelectRadio(AnekdotType.AnekdotType2)}
                />
              </div>
            </span>

            <span>
              <input
                type="radio"
                id="AnekdotType3"
                name="contact"
                value="AnekdotType3"
                checked={isRadioSelected(AnekdotType.AnekdotType3)}
                readOnly={true}
              />
              <label htmlFor="AnekdotType3">Состояние вертолётиков</label>
              <div>
                <Image
                  src={
                    isRadioSelected(AnekdotType.AnekdotType3)
                      ? pizzaOn
                      : pizzaOff
                  }
                  alt=""
                  onClick={(e) => handleSelectRadio(AnekdotType.AnekdotType3)}
                />
              </div>
            </span>

            <span>
              <input
                type="radio"
                id="AnekdotType4"
                name="contact"
                value="AnekdotType4"
                checked={isRadioSelected(AnekdotType.AnekdotType4)}
                readOnly={true}
              />
              <label htmlFor="AnekdotType4">Еба шатает нахуй</label>
              <div>
                <Image
                  src={
                    isRadioSelected(AnekdotType.AnekdotType4)
                      ? pizzaOn
                      : pizzaOff
                  }
                  alt=""
                  onClick={(e) => handleSelectRadio(AnekdotType.AnekdotType4)}
                />
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
