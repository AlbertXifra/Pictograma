import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth // Afegir el google auth en el firebase
  ) {}
  // Iniciar Sessió amb Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Iniciar Sessió automaticament
  AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        alert('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}