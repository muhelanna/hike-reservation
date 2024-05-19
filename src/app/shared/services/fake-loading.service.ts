import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeLoadingService {

  constructor() { }

  // Promise, Observable
  loadingWithPromise(): Promise<number> {
    return new Promise((resolve, reject) => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        if(i === 3){
          clearInterval(interval)
          resolve(i);
        }
      }, 1000)
    });
  }
}
