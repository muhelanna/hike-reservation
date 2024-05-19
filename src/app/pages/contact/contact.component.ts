import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';

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

  reservations$: Observable<any[]> = of([]);

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
    this.reservations$ = this.afs.collection('reservations').valueChanges();
  }

  updateReservation(name: string, updatedData: any) {
    this.afs.collection('reservations', ref => ref.where('name', '==', name))
      .get()
      .toPromise()
      .then(querySnapshot => {
        if (querySnapshot && !querySnapshot.empty) {
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
        } else {
          console.error('No matching reservation found for update.');
        }
      })
      .catch(error => {
        console.error('Error finding reservation: ', error);
      });
  }

  deleteReservation(name: string) {
    this.afs.collection('reservations', ref => ref.where('name', '==', name))
      .get()
      .toPromise()
      .then(querySnapshot => {
        if (querySnapshot && !querySnapshot.empty) {
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
        } else {
          console.error('No matching reservation found for deletion.');
        }
      })
      .catch(error => {
        console.error('Error finding reservation: ', error);
      });
  }
}