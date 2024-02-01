import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {JobPostComponent} from "./job-post/job-post.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'job/:id',
    component: JobPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
