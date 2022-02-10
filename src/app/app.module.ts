import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';
import {RouterModule, Routes} from "@angular/router";
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { EditEducationComponent } from './education/edit-education/edit-education.component';
import { AddEducationComponent } from './education/add-education/add-education.component';
import { AddExperienceComponent } from './experience/add-experience/add-experience.component';
import { EditExperienceComponent } from './experience/edit-experience/edit-experience.component';
import { SkillComponent } from './skill/skill.component';
import { EditSkillComponent } from './skill/edit-skill/edit-skill.component';
import { AddSkillComponent } from './skill/add-skill/add-skill.component';

const routes : Routes = [
  { path :'', component : LoginComponent },
  { path :'register', component : RegistrationComponent},
  { path :'profile', component : ProfileComponent},
  { path :'education', component : EducationComponent},
  { path :'experience', component : ExperienceComponent},
  { path :'editEducation', component : EditEducationComponent},
  { path :'addEducation', component : AddEducationComponent},
  { path :'editExperience', component : EditExperienceComponent},
  { path :'addExperience', component : AddExperienceComponent},
  { path :'Experience', component : ExperienceComponent},
  { path :'skill', component : SkillComponent},
  { path :'addSkill', component : AddSkillComponent},
  { path :'editSkill', component : EditSkillComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    RegistrationComponent,
    LoginComponent,
    EducationComponent,
    ExperienceComponent,
    EditEducationComponent,
    AddEducationComponent,
    AddExperienceComponent,
    EditExperienceComponent,
    SkillComponent,
    EditSkillComponent,
    AddSkillComponent,

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
