export class Participant {
    name: string;
    surname: string;
    hat: Hats;
    chest: string;
    pants: string;
    sex: Sex;

    constructor() { }

}


export enum Sex {
    Male = 'Male',
    Female = 'Female'
}

export enum Hats {
  None = 'None',
  Fullcap = 'Fullcap',
  Strawhat = 'Strawhat',
  Magic = 'Magic'
}
