import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  @Input() peopleList: any;

  constructor(private peopleService:PeopleService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(){
    this.peopleService.getPersons().subscribe(response => {
      this.peopleList = response;
    })
  }
}
