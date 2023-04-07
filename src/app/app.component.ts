import { Component, OnInit } from '@angular/core';
import { MyServService } from './allServ/my-serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'replay-subject';
  userOneList1: string[]=[];
  userOneList2:string[]=[];
  userOneList3=[];

  sunbscibe2:boolean=false
  sunbscibe3:boolean=false

  constructor(private myserv:MyServService){}

  func(data:any){
    // console.log(data);
    this.myserv.myRepSub.next(data)
  }

  user2button(){
    this.myserv.myRepSub.subscribe(res=>{
      this.userOneList2.push(res)
    })
    this.sunbscibe2=!this.sunbscibe2
  }
  user3button(){
    this.sunbscibe3=!this.sunbscibe3
  }

  ngOnInit() {
   this.myserv.myRepSub.subscribe(res=>{
    console.log(res);
    this.userOneList1.push(res);
   }) 
  }
}
