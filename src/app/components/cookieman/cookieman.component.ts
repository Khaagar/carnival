import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cookieman } from 'src/app/models/cookieman';

@Component({
  selector: 'app-cookieman',
  templateUrl: './cookieman.component.html',
  styleUrls: ['./cookieman.component.scss']
})
export class CookieComponent implements OnInit {
  
  @Input() cookie: Cookieman;

  @Output('eated') eated: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  eatMe(){
    this.eated.next(); 
  }
}
