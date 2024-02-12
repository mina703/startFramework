import { PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

const routes: Routes = [
  {path:"", redirectTo: "/startFramework" , pathMatch:'full'},
  {path:"/startFramework", component: HomeComponent , title: "Home"},
  {path:"/about", component: AboutComponent, title: "About"},
  {path:"/portfolio", component:ServicesComponent, title: "Portofolio"},
  {path:"/contact", component:ContactComponent, title: "Contact Us"},
  {path:"**", component:NotfoundComponent , title: "Error 404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
