import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  FirstNumber!:string;
  SecondNumber!:string;
  Result!:Number;
  constructor() { }

  ngOnInit(): void {
  }
  Subtraction(){
    this.Result=parseInt(this.FirstNumber)-parseInt(this.SecondNumber);}
}
