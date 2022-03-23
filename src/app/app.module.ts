import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from "@tinymce/tinymce-angular";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { NewPostComponent } from './new-post/new-post.component';
import { MainComponent } from "./main/main.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewPostComponent,
    MainComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        EditorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
