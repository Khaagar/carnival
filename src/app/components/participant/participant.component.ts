import { Component, OnInit, Input } from '@angular/core';
import { Hats, Participant } from 'src/app/models/participant';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {

  Hats = Hats;

  @Input() participant: Participant;

  constructor() { }

  ngOnInit() {
  }

}
