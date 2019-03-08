import { Component, OnInit } from '@angular/core';
import { Cookieman} from 'src/app/models/cookieman';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Hex } from 'src/app/models/enums';

@Component({
  selector: 'app-carnival',
  templateUrl: './carnival.component.html',
  styleUrls: ['./carnival.component.scss']
})
export class CarnivalComponent implements OnInit {

  cookies: Array<Cookieman> = [];

  buttonColor: string;
  hexes = Hex;

  cookieForm: FormGroup = this.formBuilder.group({
    body: new FormControl('brown'),
    frosting: new FormControl('white'),
    mouth: new FormControl('red'),
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createCookie();
    setInterval(() => {
      this.buttonColor = this.randomColors();
    },100);
  }

  createCookie() {
    const formValue = this.cookieForm.value;
    let cookie = new Cookieman();
    cookie.body = formValue.body;
    cookie.frosting = formValue.frosting;
    cookie.mouth = formValue.mouth
    console.log(cookie);
    this.cookies.push(cookie);
  }

  randomColors() {
    let output =  '#';
    for(let i=0; i<6; i++) {
      output+= this.getRand();
    }
    return output;
  }

  randomCookie() {
    let cookieMan = new Cookieman;
    cookieMan.body = this.randomColors();
    cookieMan.frosting = this.randomColors();
    cookieMan.mouth = this.randomColors();
    this.cookies.push(cookieMan)
  }

  getRand() {
    return this.hexes['n'+Math.floor(Math.random() * 15)];  
  }

  eatHim(id: number){
    this.cookies.splice(id,1);
  }

}

