import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {
    path: 'about-us', component: AboutUsComponent
  },
  {path: 'careers', component: CareersComponent},
  // {path: 'nav-bar', component: NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
