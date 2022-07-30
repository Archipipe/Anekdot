/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useEffect, useRef, useContext } from "react";
import { AnekdotLayout } from "../components/AnekdotLayout";
import { AnekdotContext, AnekdotType, ArrorType } from "../components/context";

import S1 from "../public/S1.json";
import S2 from "../public/S2.json";
import S3 from "../public/S3.json";
import S4 from "../public/S4.json";

let AMapObj = new Map([
  [AnekdotType.AnekdotType1, S1],
  [AnekdotType.AnekdotType2, S2],
  [AnekdotType.AnekdotType3, S3],
  [AnekdotType.AnekdotType4, S4],
]);

export default function Shtirlic() {
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
