import { Injectable } from '@angular/core';
import { Hex } from '../models/enums';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  hexesMap = Hex;

  constructor() { }
  
  getRandomColor() {
    let output =  '#';
    for(let i=0; i<6; i++) {
      output+= this.getRandHex();
    }
    return output;
  }

  getRandHex() {
    return this.hexesMap['n'+Math.floor(Math.random() * 15)];  
  }
}
