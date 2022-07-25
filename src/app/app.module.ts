import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ArithmeticComponent } from './login/arithmetic/arithmetic.component';
import { AddComponent } from './login/arithmetic/add/add.component';
import { SubComponent } from './login/arithmetic/sub/sub.component';
import { MulComponent } from './login/arithmetic/mul/mul.component';
import { DivComponent } from './login/arithmetic/div/div.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArithmeticComponent,
    AddComponent,
    SubComponent,
    MulComponent,
    DivComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
