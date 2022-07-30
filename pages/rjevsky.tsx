/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useEffect, useRef, useContext } from "react";
import { AnekdotLayout } from "../components/AnekdotLayout";
import { AnekdotContext, AnekdotType, ArrorType } from "../components/context";

import R1 from "../public/R1.json";
import R2 from "../public/R2.json";
import R3 from "../public/R3.json";
import R4 from "../public/R4.json";

let AMapObj = new Map([
  [AnekdotType.AnekdotType1, R1],
  [AnekdotType.AnekdotType2, R2],
  [AnekdotType.AnekdotType3, R3],
  [AnekdotType.AnekdotType4, R4],
]);

export default function Rjevsky() {
  let ref = useRef<HTMLDivElement>(null);
  const [radioState, setRadioState] = useState<AnekdotType>(
    AnekdotType.AnekdotType1
  );

  function arrorAction<ArrorType>(action: ArrorType): void {
    let curObj: string[] = AMapObj.get(radioState)!;
    switch (action) {
      case ArrorType.ArrorLeft:
        curObj.unshift(curObj.pop()!);
        break;
      case ArrorType.ArrorRight:
        curObj.push(curObj.shift()!);
        break;
    }
    ref.current!.innerHTML = curObj[0];
  }
  useEffect(() => {
    ref.current!.innerHTML = AMapObj.get(radioState)![0];
  }, [radioState]);

  return (
    <AnekdotContext.Provider
      value={{
        Anekdot: radioState,
        setAnekdot: setRadioState,
        arrorAction,
      }}
    >
      <AnekdotLayout>
        <div ref={ref}>{AMapObj.get(radioState)![0]}</div>
      </AnekdotLayout>
    </AnekdotContext.Provider>
  );
}
