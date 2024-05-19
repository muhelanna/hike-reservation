import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  railReservationForm = new FormGroup({
    name: new FormControl(''),
    rail: new FormGroup({
      railName: new FormControl(''),
      date: new FormControl(''),
    }),
    comment: new FormControl(''),
    check: new FormControl(''),
  })

  onSubmit() {
    console.log(this.railReservationForm.value);
  }

}
