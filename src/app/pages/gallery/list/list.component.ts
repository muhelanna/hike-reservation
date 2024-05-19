import { outputAst } from '@angular/compiler';
import {  Component, EventEmitter, OnInit, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() galleryObjectInput: Array<any> = [];
  @Output() imageObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenImage: any;

  constructor(){
    //this.chosenImage = this.galleryObjectInput[0];
  }

  ngOnInit(): void {
    this.chosenImage = this.galleryObjectInput[0];
    this.reload();
  }

  reload(){
    this.imageObjectEmitter.emit(this.chosenImage);
    //console.log(this.chosenImage); jo
  }
}
