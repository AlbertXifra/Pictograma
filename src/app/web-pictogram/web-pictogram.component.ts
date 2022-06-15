import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Pictogram } from './../shared/pictogram';

@Component({
  selector: 'app-web-pictogram',
  templateUrl: './web-pictogram.component.html',
  styleUrls: ['./web-pictogram.component.css']
})
export class WebPictogramComponent implements OnInit {

  //Afegim els variables necessaris per poder fer les operacions
  p: number = 1; //Afegir el nombre de pàgines
  Pictogram: Pictogram[]; //Array dels pictogrames
  hidenWhenNoPictograms: boolean = false; // Per comprovar si no hi han pictogrames
  noData: boolean = false; // Per fer la confirmació que no hi han pictogrames
  preLoader: boolean = true; //Per mirar si ha de carregar els pictogrames si n'hi han

  //Afegir en el cosntructor el CrudService per fer la relació entra la base de dades i el projecte, el toast per poder fer alguna animació
  constructor(public crudApi: CrudService) { }

  //En aquesta funció serà per poder fer els pictogrames que vols per pàgina
  ngOnInit(): void {
    this.dataState();
    let p = this.crudApi.GetPictogramsList();
    p.snapshotChanges().subscribe((data) => {
      this.Pictogram = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Pictogram.push(a as Pictogram);
      });
    });
  }

  //Aquesta fució serà per saber si a la base de dades hi ha pictogrames o no
  dataState() {
    this.crudApi
      .GetPictogramsList()
      .valueChanges()
      .subscribe((data) => {
        this.preLoader = false;
        if(data.length <= 0) {
          this.hidenWhenNoPictograms = false;
          this.noData = true;
        } else {
          this.hidenWhenNoPictograms = true;
          this.noData = false;
        }
      });
  }

}
