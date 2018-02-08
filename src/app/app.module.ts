import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { StatusComponent } from './status/status.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetpasswordComponent,
    ChangepasswordComponent,
    ProjectsComponent,
    ProfilesComponent,
    StatusComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', pathMatch:'full', redirectTo:'login'},
      { path:'login',component:LoginComponent },
      { path:'forgotpassword',component:ForgetpasswordComponent},
      { path:'dashboard',component:DashboardComponent },
      { path:'profiles',component:ProfilesComponent },
      { path:'register',component:RegisterComponent },
      { path:'projects',component:ProjectsComponent },
      { path:'status',component:StatusComponent },
      { path:'changepassword',component:ChangepasswordComponent },
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
