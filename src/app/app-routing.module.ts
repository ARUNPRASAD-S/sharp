import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArithmeticComponent } from './login/arithmetic/arithmetic.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './login/arithmetic/add/add.component';
import { SubComponent } from './login/arithmetic/sub/sub.component';
import { MulComponent } from './login/arithmetic/mul/mul.component';
import { DivComponent } from './login/arithmetic/div/div.component';


const routes: Routes = [

  {
    path:"login", 
    component:LoginComponent
  },
    {
      path: "login/arithmetic",
      component: ArithmeticComponent
    },
    {
      path: "login/arithmetic/add",
      component: AddComponent
    },
    {
      path: "login/arithmetic/sub",
      component: SubComponent
    },
    {
      path: "login/arithmetic/mul",
      component: MulComponent
    },
    {
      path: "login/arithmetic/div",
      component: DivComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
