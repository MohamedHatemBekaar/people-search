import { PeopleService } from './../services/people.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() person:any;
  constructor() { }

  ngOnInit(): void {
  }
}
