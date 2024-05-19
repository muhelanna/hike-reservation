import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  username = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private loadingService: FakeLoadingService) {}

  login(){
  this.loadingService.loadingWithPromise().then((data: number) => {
      if(data === 3){
        if (this.username.value === 'test@gmail.com' && this.password.value ==='testpw'){
          this.router.navigateByUrl('/main');
        } else {
          console.error('Helytelen felhasználónév vagy jelszó!');
        }
      }
  }).catch(error => {
    console.error(error);
  }).finally(() => {
    console.log('finally');
  });
  }
}
