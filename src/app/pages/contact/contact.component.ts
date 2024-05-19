import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  railReservationForm = new FormGroup({
    name: new FormControl(''),
    rail: new FormGroup({
      railName: new FormControl(''),
      date: new FormControl(''),
    }),
    comment: new FormControl(''),
    check: new FormControl(false),
  });

  reservations: any[] = [];

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.fetchReservations();
  }

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

  fetchReservations() {
    this.afs.collection('reservations').valueChanges().subscribe(
      reservations => {
        this.reservations = reservations;
      },
      error => {
        console.error('Error fetching reservations: ', error);
      }
    );
  }

  updateReservation(name: string, updatedData: any) {
    this.afs.collection('reservations', ref => ref.where('name', '==', name))
      .get()
      .subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.afs.collection('reservations').doc(doc.id).update(updatedData)
            .then(() => {
              console.log('Reservation updated successfully');
              this.fetchReservations();
            })
            .catch(error => {
              console.error('Error updating reservation: ', error);
            });
        });
      });
  }

  deleteReservation(name: string) {
    this.afs.collection('reservations', ref => ref.where('name', '==', name))
      .get()
      .subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.afs.collection('reservations').doc(doc.id).delete()
            .then(() => {
              console.log('Reservation deleted successfully');
              this.fetchReservations();
            })
            .catch(error => {
              console.error('Error deleting reservation: ', error);
            });
        });
      });
  }
}