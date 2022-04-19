import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { BroadcastsComponent } from './pages/broadcasts/broadcasts.component';
import { PeopleComponent } from './pages/people-pages/people/people.component';
import { AddPeopleComponent } from './pages/people-pages/add-people/add-people.component';
import { ResponsesComponent } from './pages/responses/responses.component';

const routes: Routes = [
  {
    data: { title: 'Welcome to Personally' },
    path: '',
    component: WelcomeComponent,
  },
  {
    data: { title: 'Sign Up' },
    path: 'signup',
    component: SignupComponent,
  },
  {
    data: { title: 'Login' },
    path: 'login',
    component: LoginComponent,
  },
  {
    data: { title: 'Broadcasts' },
    path: 'broadcasts',
    component: BroadcastsComponent,
  },
  {
    data: { title: 'Add People' },
    path: 'people/add',
    component: AddPeopleComponent,
  },
  {
    data: { title: 'People' },
    path: 'people',
    component: PeopleComponent,
  },

  {
    data: { title: 'Responses' },
    path: 'responses',
    component: ResponsesComponent,
  },
  {
    data: { title: '404 Not Found' },
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
