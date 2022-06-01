import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

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
}
