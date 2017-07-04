export class Core{
    title:string;
    img:string;
    fill:string;
} 


export const CORES:Core[]=[
    {title:"MEANING",img:"../assets/img/rocket.png",fill:"skyblue"},
    {title:"ACCOMPLISHMENT",img:"../assets/img/trofeo.png",fill:"yellow"},
    {title:"EMPOWERMENT",img:"../assets/img/engage.png",fill:"red"},
    {title:"SOCIAL_INFLUENCE",img:"../assets/img/social.png",fill:"lavender"},
    {title:"UNPREDICTABILITY",img:"../assets/img/voice.png",fill:"#edc996"},
    {title:"AVOIDANCE",img:"../assets/img/spray.png",fill:"hotpink"},
    {title:"SCARCITY",img:"../assets/img/money.png",fill:"gold"},
    {title:"OWNERSHIP",img:"../assets/img/diamond.png",fill:"azure"},
]

export class Technique {
    id: string;
    cx: number;
    cy: number;
    radio: string;
    fillId: string;
    fillIdOri: string;
    class: string;
    type: string;
    done: boolean;
}