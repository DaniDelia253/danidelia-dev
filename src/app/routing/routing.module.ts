import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { MyWorkComponent } from '../my-work/my-work.component';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'my-work', component: MyWorkComponent },
  { path: 'contact-me', component: ContactMeComponent },
]; // sets up routes constant where you define your routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
