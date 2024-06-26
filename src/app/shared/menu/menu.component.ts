import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  @Input() currentPage: string = '';
  //output direktíva/változó, ez egy esemény küldő
  @Output() selectedPage: EventEmitter<string> = new EventEmitter(); //@angular/core: eventemmiter and output
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();

  constructor(){
    //console.log('constructor called.');
  }

  ngOnInit(): void {
    //console.log('ngOnInit called.');
  }

  ngAfterViewInit(): void{
    //console.log('ngAfterViewInit called.');
  }

  menuSwitch() {
    this.selectedPage.emit(this.currentPage);
  }

  close() {
    this.onCloseSidenav.emit(true);
  }
}
