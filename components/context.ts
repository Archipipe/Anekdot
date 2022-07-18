import React from "react"
export enum AnekdotType{
    AnekdotType1,
    AnekdotType2,
    AnekdotType3,
    AnekdotType4,
}

interface contextTypes{
    Anekdot: AnekdotType,
    setAnekdot: Function
}

export const AnekdotContext = React.createContext<contextTypes>({Anekdot: AnekdotType.AnekdotType1,setAnekdot: ()=>{}})