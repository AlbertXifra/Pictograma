import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';
import firebase from 'firebase/compat/app';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Titol de la pestanya de google
  title = 'Pictograma';

  //Afegim en el constructor l'autentificació de google perquè funcioni
  constructor(public authService: AuthService) {}

  
  ngOnInit() {}

  componentDidMount() {
    let user = firebase.auth().currentUser;

    let email;

    if(user) {
      email = user.email;
    }

    if(!email) {
      email = user.providerData[0].email;
    }

    console.log(email);
    
  }
}
