import { Injectable } from '@angular/core';

@Injectable()
export class DatacourseService {

  constructor() { }

 

  course:object[]=[
    {"id":"123444", "course":"database", "dosen":"rozz","student":"aaaa"},
    {"id":"12352", "course":"english", "dosen":"John","student":"aaaa"},
    {"id":"13456", "course":"Pendidikan pancasila", "dosen":"Arun Sharma","student":"aaaa"},
    {"id":"6481654984", "course":"teknik", "dosen":"Mark Z Danielewksi","student":"aaaa"},
    {"id":"9780143303848", "course":"si", "dosen":"jeff kinney","student":"aaaa"},
    {"id":"nf32df", "course":"ti", "dosen":"sarwqerewr","student":"aaaa"}
  ]

}
