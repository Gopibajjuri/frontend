import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';
import {RouterModule, Routes} from "@angular/router";
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes : Routes = [
  { path :'', component : LoginComponent },
  { path :'register', component : RegistrationComponent},
  { path :'profile/:id', component : ProfileComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    EditProfileComponent,
    RegistrationComponent,
    LoginComponent,

  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
