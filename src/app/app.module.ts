import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TextInputRegistrationComponent } from './components/text-input-registration/text-input-registration.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PersonallyLogoComponent } from './components/personally-logo/personally-logo.component';
import { BlackButtonComponent } from './components/black-button/black-button.component';
import { LoginComponent } from './pages/login/login.component';
import { TopBotLandingComponent } from './components/top-bot-landing/top-bot-landing.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoLandingComponent } from './components/info-landing/info-landing.component';
import { BroadcastsComponent } from './pages/broadcasts-pages/broadcasts/broadcasts.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ResponsesComponent } from './pages/responses/responses.component';
import { PeopleComponent } from './pages/people-pages/people/people.component';
import { AddPeopleComponent } from './pages/people-pages/add-people/add-people.component';
import { PeopleFormComponent } from './components/people-form/people-form.component';
import { EditPeopleComponent } from './pages/people-pages/edit-people/edit-people.component';
import { IdBroadcastComponent } from './pages/broadcasts-pages/id-broadcast/id-broadcast.component';
import { CreateBroadcastComponent } from './pages/create-broadcast/create-broadcast.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TextInputRegistrationComponent,
    SignupComponent,
    PersonallyLogoComponent,
    BlackButtonComponent,
    LoginComponent,
    TopBotLandingComponent,
    WelcomeComponent,
    HeaderComponent,
    InfoLandingComponent,
    BroadcastsComponent,
    SidebarComponent,
    PageHeaderComponent,
    PeopleComponent,
    ResponsesComponent,
    AddPeopleComponent,
    PeopleFormComponent,
    EditPeopleComponent,
    IdBroadcastComponent,
    CreateBroadcastComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
