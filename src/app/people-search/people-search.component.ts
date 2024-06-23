import { PeopleService } from './../services/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.scss']
})
export class PeopleSearchComponent implements OnInit {
  personName:string = '';
  searchResult: any;
  constructor(private peopleService:PeopleService) { }

  ngOnInit(): void {
  }

  searchForPerson(){
    this.peopleService.getPersons(this.personName).subscribe(response => {
      this.searchResult = response;
    })
  }

  clearSearchResult(){
    this.personName = '';
    this.peopleService.getPersons().subscribe(response => {
      this.searchResult = response;
    })
  }
}
