/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useEffect, useRef, useContext } from "react";
import { AnekdotLayout } from "../components/AnekdotLayout";
import { AnekdotContext, AnekdotType } from "../components/context";

import R1 from "../public/R1.json";

export default function Rjevsky() {
  let ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (null !== ref.current) {
      ref.current.innerHTML = R1[0];
    }
  }, []);
  const R = R1[0];

  const [radioState, setRadioState] = useState<AnekdotType>(
    AnekdotType.AnekdotType1
  );

  useEffect(() => {
    console.log(radioState, "==");
  });

  return (
    <AnekdotContext.Provider
      value={{ Anekdot: radioState, setAnekdot: setRadioState }}
    >
      <AnekdotLayout>
        <div ref={ref}></div>
      </AnekdotLayout>
    </AnekdotContext.Provider>
  );
}
