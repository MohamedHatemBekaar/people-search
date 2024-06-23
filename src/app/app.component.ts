import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'people-search';
  people: any;

  getPeople(people:any){
    this.people = people;
  }
}
