import { Component, OnInit } from '@angular/core';
import { Cookieman} from 'src/app/models/cookieman';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Hex } from 'src/app/models/enums';
import { HelpersService } from 'src/app/services/helpers.service';
import { ICookieman } from 'src/app/models/iCookieman';

@Component({
  selector: 'app-baking-sheet',
  templateUrl: './baking-sheet.component.html',
  styleUrls: ['./baking-sheet.component.scss']
})
export class BakingSheetComponent implements OnInit {

  cookies: Array<Cookieman> = [];

  buttonColor: string;
  hexes = Hex;

  cookieForm: FormGroup = this.formBuilder.group({
    bodyColor: new FormControl('brown'),
    frostingColor: new FormControl('antiquewhite'),
    mouthColor: new FormControl('red'),
  });

  constructor(private formBuilder: FormBuilder, private helpersService: HelpersService) { }

  ngOnInit() {
    this.createCookie();
    setInterval(() => {
      this.buttonColor = this.helpersService.getRandomColor();
    },100);
  }

  createCookie() {
    const cookie: ICookieman = this.cookieForm.value;
    const cookieMan = new Cookieman(cookie);
    this.cookies.push(cookieMan);
  }

  randomCookie() {
    let cookieMan = new Cookieman();
    this.cookies.push(cookieMan);
  }

  burnHim(id: number){
    this.cookies[id].burnSelf();
  }

  eatHim(id: number){
    this.cookies.splice(id,1);
  }
}

