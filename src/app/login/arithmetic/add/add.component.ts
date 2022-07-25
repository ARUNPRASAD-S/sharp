import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  FirstNumber!:string;
  SecondNumber!:string;
  Result!:Number;
  constructor() { }

  ngOnInit(): void {
  }
  Addition(){
    this.Result=parseInt(this.FirstNumber)+parseInt(this.SecondNumber);}
}
