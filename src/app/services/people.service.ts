import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  BASE_URL = 'https://swapi.dev/api/'
  constructor(private http:HttpClient) { }

  getPersons(personName:string = ''){
    let queryparam = '';
    if(personName){
      queryparam += `?search=${personName}`
    }

    return this.http.get(`${this.BASE_URL}people${queryparam}`)
  }
}
