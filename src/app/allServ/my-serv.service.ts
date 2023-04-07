import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServService {

  myRepSub= new ReplaySubject<string>(2)

  constructor() { }
}
