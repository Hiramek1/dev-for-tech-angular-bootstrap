import { RegisterComponent } from './pages/register/register.component';
import { HoldingFormComponent } from './pages/holding-form/holding-form.component';
import { ClientFormComponent } from './pages/client-form/client-form.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/client-form', component: ClientFormComponent },
  { path: 'register/holding-form', component: HoldingFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
