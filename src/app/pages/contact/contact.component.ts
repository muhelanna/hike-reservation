import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

export interface Reservations {
  name: string;
  railName: string;
  date: string;
  comment: string;
  check: boolean;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'] // Corrected to styleUrls
})
export class ContactComponent implements OnInit { // Implement OnInit

  railReservationForm: FormGroup; // Declare the form group
  reservations: Reservations[] = []; // Declare the reservations property

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    // Initialize the form group
    this.railReservationForm = new FormGroup({
      name: new FormControl(''),
      railName: new FormControl(''),
      date: new FormControl(''),
      comment: new FormControl(''),
      check: new FormControl(''),
    });
  }

  ngOnInit() {
    this.fetchReservations();
  }

  fetchReservations() {
    this.afs.collection<Reservations>('reservations').valueChanges().subscribe(
      reservations => {
        this.reservations = reservations;
      },
      error => {
        console.error('Error fetching reservations: ', error);
      }
    );
  }

  items: Reservations[] = [];

  onSubmit() {
    const reservation = this.railReservationForm.value;
    this.afs.collection('reservations').add(reservation)
      .then(() => {
        console.log('Reservation added successfully');
              this.fetchReservations();
      })
      .catch(error => {
        console.error('Error adding reservation: ', error);
      });
    this.railReservationForm.reset();
  }


}