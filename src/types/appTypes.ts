import { ReactNode } from "react";
import { MouseEventHandler } from 'react';


export interface ISectionProps{
    title: string,
    children: ReactNode
}

export interface IFeedbackProps{
    options: string[],
    onLeaveFeedback: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
}
export interface IButtonFeedback{
    key: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
    type: string,
    name:string
}
export interface INotification{
    message:string
}
export interface IStatistics{
    good: number,
    neutral: number,
    bad: number,
    total: number,
    positiveFeedbacks:number,
}