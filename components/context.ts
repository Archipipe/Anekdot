import React from "react"
export enum AnekdotType{
    AnekdotType1 = "AnekdotType1",
    AnekdotType2 = "AnekdotType2",
    AnekdotType3 = "AnekdotType3",
    AnekdotType4 = "AnekdotType4",
}

export enum ArrorType{
    ArrorLeft = "ArrorLeft",
    ArrorRight = "ArrorRight"
}

interface contextTypes{
    Anekdot: AnekdotType,
    setAnekdot: Function,
    arrorAction: <ArrorType>(action:ArrorType) => void;
}

export const AnekdotContext = React.createContext<contextTypes>({Anekdot: AnekdotType.AnekdotType1,setAnekdot: ()=>{}, arrorAction: ()=>{}})