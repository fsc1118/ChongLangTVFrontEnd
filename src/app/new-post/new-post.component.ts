import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  constructor() { }

  title: string = ""

  text: string = ""

  isTitleValid: boolean = true
  isTextValid: boolean = true

  notifyOnReply: boolean = true
  onTextChange = (event: any)=>{
    this.text = event.editor.getContent()
  }

  submit = ()=>{
    this.isTextValid = this.text.length !== 0
    this.isTitleValid = this.title.length !== 0
    if (!this.isTitleValid || !this.isTextValid) {
      return
    }
    this.isTextValid = true

    console.log(this.title, this.text, this.notifyOnReply)
  }
}
