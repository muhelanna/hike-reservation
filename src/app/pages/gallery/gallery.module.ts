import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { ListComponent } from './list/list.component';
import { ViewerComponent } from './viewer/viewer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from '../../shared/pipes/date-format.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    GalleryComponent,
    ListComponent,
    ViewerComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatInputModule
  ]
})
export class GalleryModule { }
