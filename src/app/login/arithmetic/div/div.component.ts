import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent implements OnInit {
  FirstNumber!:string;
  SecondNumber!:string;
  Result!:Number;
  constructor() { }

  ngOnInit(): void {
  }
  Division(){
    this.Result=parseInt(this.FirstNumber)/parseInt(this.SecondNumber);
  }

}

