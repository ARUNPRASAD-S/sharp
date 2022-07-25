import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arithmetic',
  templateUrl: './arithmetic.component.html',
  styleUrls: ['./arithmetic.component.css']
})
export class ArithmeticComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  add()
  {
    this.router.navigateByUrl("/add");
  }
  sub()
  {
    this.router.navigateByUrl("/sub");
  }
  mul()
  {
    this.router.navigateByUrl("/mul");
  }
  div()
  {
    this.router.navigateByUrl("/div");
  }
}
