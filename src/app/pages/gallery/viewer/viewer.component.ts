import {  Component, EventEmitter, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent {

  @Input() imageInput: any;

  commentObject: any = {};
  comments: Array<any> = [];

  constructor() {}

  ngOnInit(): void {

  }

  addComment() {
    if(this.commentObject.username && this.commentObject.comment){
      this.commentObject['date'] = new Date();
      //SPREAD OPERATOR
      this.comments.push({...this.commentObject});

      //Object
      //this.comments.push(Object.assign({}, this.commentObject));
    }
  }
}
