import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username!:string;
  public password!:string;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
arithmetic()
{
  this.router.navigateByUrl("/arithmetic");
}
}
