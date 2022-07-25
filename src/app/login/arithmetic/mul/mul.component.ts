import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mul',
  templateUrl: './mul.component.html',
  styleUrls: ['./mul.component.css']
})
export class MulComponent implements OnInit {
  FirstNumber!:string;
  SecondNumber!:string;
  Result!:Number;
  constructor() { }

  ngOnInit(): void {
  }
  Multiplication(){
    this.Result=parseInt(this.FirstNumber)*parseInt(this.SecondNumber);}
}
