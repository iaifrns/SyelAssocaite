export interface ExpertiseType {
    icon: string,
    title: string,
    desc: string,
    link: string
}

export interface DetailExpertise{
    title:string,
    sub:string,
    desc: string,
    descList: {title:string, desc:string}[],
    text: string,
    img:string
}