import { Component } from '@angular/core';
import { GalleryObject } from '../../shared/menu/constants/constans';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  galleryObject: Array<any> = GalleryObject;
  chosenImage: any;

  constructor(){
    //this.chosenImage = this.galleryObject[0];
  }

  ngOnInit(): void {
  
  }

  //reload(){}

  loadImage(imageObject: any){
    this.chosenImage = imageObject;
    console.log(imageObject);
  }
}
