import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'projekt-4-5-6';
  page ='';

  constructor(private router: Router) {
    // parameter adattagok
  }

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
      this.page = (evts.urlAfterRedirects as string).split('/')[1] as string;
    })
  }

  //amit a fgv. megkap paramétereben, azzal tölti fel a page változót és azt az oldalt tölti, majd be
  changePage(selectedPage: string){  //selectedPage - event
    //this.page = selectedPage;   //fenti page változóra utal
    this.router.navigateByUrl(selectedPage);
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }
}
