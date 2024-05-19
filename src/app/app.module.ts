import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { MainComponent } from './pages/main/main.component';
//import { GalleryComponent } from './pages/gallery/gallery.component';
//import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
//import { ListComponent } from './pages/gallery/list/list.component';
//import { ViewerComponent } from './pages/gallery/viewer/viewer.component';
//import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import {AngularFireModule} from '@angular/fire/compat';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    //MainComponent,
    //GalleryComponent,
    //ContactComponent,
    MenuComponent,
    //ListComponent,
    //ViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ngModelt tartalmazza
    FormsModule,
    AngularFireModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule
  ],
  providers: [
    //provideFirebaseApp(() => initializeApp({"projectId":"hike-reservation","appId":"1:583537850888:web:829f2a1f8e70bc6a68efbd","storageBucket":"hike-reservation.appspot.com","apiKey":"AIzaSyA2gdQf8wS-bYTcw9dCQFRLqPZDz5peoDM","authDomain":"hike-reservation.firebaseapp.com","messagingSenderId":"583537850888","measurementId":"G-G6LB7PP0M1"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
