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

  //Create Pictogram
  AddPictogram(pictogram: Pictogram) {
    this.pictogramsRef.push({ 
      namePictogram: pictogram.namePictogram,
      imagePictogram: pictogram.imagePictogram
    });
  }

  //Fetch Single Pictogram Object
  GetPictogram(id: string) {
    this.pictogramRef = this.db.object('pictograms-list/' + id);
    return this.pictogramRef;
  }

  //Fetch Pictogram List
  GetPictogramsList() {
    this.pictogramsRef = this.db.list('pictograms-list')
    return this.pictogramsRef;
  }

  //Update Pictogram Object
  UpdatePictogram(pictogram: Pictogram) {
    this.pictogramRef.update({ 
      namePictogram: pictogram.namePictogram,
      imagePictogram: pictogram.imagePictogram
    });
  }

  //Delete Pictogram Object
  DeletePictogram(id: string) {
    this.pictogramRef = this.db.object('pictograms-list/' + id);
    this.pictogramRef.remove();
  }
  
}
