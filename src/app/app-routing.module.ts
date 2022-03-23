import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NewPostComponent} from "./new-post/new-post.component"
import {MainComponent} from "./main/main.component"
const routes: Routes = [
  { path: 'createPost', component:  NewPostComponent},
  { path: '', component: MainComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

