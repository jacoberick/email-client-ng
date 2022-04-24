import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { BroadcastsComponent } from './pages/broadcasts-pages/broadcasts/broadcasts.component';
import { IdBroadcastComponent } from './pages/broadcasts-pages/id-broadcast/id-broadcast.component';
import { PeopleComponent } from './pages/people-pages/people/people.component';
import { CreateBroadcastComponent } from './pages/create-broadcast/create-broadcast.component';
import { AddPeopleComponent } from './pages/people-pages/add-people/add-people.component';
import { EditPeopleComponent } from './pages/people-pages/edit-people/edit-people.component';
import { ResponsesComponent } from './pages/responses/responses.component';
import { AuthGaurdService as AuthGaurd } from './services/auth-gaurd.service';

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
    data: { title: 'Create Broadcast' },
    path: 'broadcasts/create',
    component: CreateBroadcastComponent,
    canActivate: [AuthGaurd],
  },
  {
    data: { title: 'ID Broadcast' },
    path: 'broadcasts/:id',
    component: IdBroadcastComponent,
    canActivate: [AuthGaurd],
  },
  {
    data: { title: 'Broadcasts' },
    path: 'broadcasts',
    component: BroadcastsComponent,
    canActivate: [AuthGaurd],
  },
  {
    data: { title: 'Edit People' },
    path: 'people/:id',
    component: EditPeopleComponent,
    canActivate: [AuthGaurd],
  },
  {
    data: { title: 'Add People' },
    path: 'people/add',
    component: AddPeopleComponent,
    canActivate: [AuthGaurd],
  },
  {
    data: { title: 'People' },
    path: 'people',
    component: PeopleComponent,
    canActivate: [AuthGaurd],
  },
  {
    data: { title: 'Responses' },
    path: 'responses',
    component: ResponsesComponent,
    canActivate: [AuthGaurd],
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
