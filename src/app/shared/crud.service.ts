import { Injectable } from '@angular/core';
import { Pictogram } from '../shared/pictogram';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  pictogramsRef: AngularFireList<any>;
  pictogramRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {}

  //Crear Pictograma
  AddPictogram(pictogram: Pictogram) {
    this.pictogramsRef.push({ 
      namePictogram: pictogram.namePictogram,
      imagePictogram: pictogram.imagePictogram
    });
  }

  //Agafar un pictograma en concret a través de la seva ip
  GetPictogram(id: string) {
    this.pictogramRef = this.db.object('pictograms-list/' + id);
    return this.pictogramRef;
  }

  //Afagar tots els pictogrames
  GetPictogramsList() {
    this.pictogramsRef = this.db.list('pictograms-list')
    return this.pictogramsRef;
  }

  //Editar Pictograma
  UpdatePictogram(pictogram: Pictogram) {
    this.pictogramRef.update({ 
      namePictogram: pictogram.namePictogram,
      imagePictogram: pictogram.imagePictogram
    });
  }

  //Eliminar Pcitograma
  DeletePictogram(id: string) {
    this.pictogramRef = this.db.object('pictograms-list/' + id);
    this.pictogramRef.remove();
  }
  
}
