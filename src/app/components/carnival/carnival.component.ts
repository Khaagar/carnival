import { Component, OnInit } from '@angular/core';
import { Participant, Sex, Hats } from 'src/app/models/participant';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-carnival',
  templateUrl: './carnival.component.html',
  styleUrls: ['./carnival.component.scss']
})
export class CarnivalComponent implements OnInit {

  partyParticipants: Array<Participant> = [];

  Sex = Sex;
  Hats = Hats;


  participantForm: FormGroup = this.formBuilder.group({
    name: new FormControl(''),
    surname: new FormControl(''),
    hat: new FormControl(''),
    chest: new FormControl(''),
    pants: new FormControl(''),
    sex: new FormControl(''),

  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  createParticipant() {
    const formValue = this.participantForm.value;
    let participant = new Participant();
    participant.name = formValue.name;
    participant.surname = formValue.surname;
    participant.hat = Hats[participant.hat];
    participant.chest = formValue.chest;
    participant.pants = formValue.pants;
    // participant.sex = Sex[formValue.sex];
    console.log(participant);
    this.partyParticipants.push(participant);
  }

}
