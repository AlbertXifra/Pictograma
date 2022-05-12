import { Injectable } from '@angular/core';
import { Pictogram } from '../shared/pictogram';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  pictogramsRef: AngularFireList<any>;
  pictogramRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  //Create Pictogram
  AddPictogram(pictogram: Pictogram) {
    this.pictogramsRef.push({ 
      namePictogram: pictogram.namePictogram,
      imagePictogram: pictogram.imagePictogram
    });
  }

  GetPictogramList() {
    this.pictogramsRef = this.db.list('pictograms-list')
    return this.pictogramsRef;
  }

  //Create Pictogram
  UpdatePictogram(pictogram: Pictogram) {
    this.pictogramRef.update({ 
      namePictogram: pictogram.namePictogram,
      imagePictogram: pictogram.imagePictogram
    });
  }

  DeletePictogram(id: string) {
    this.pictogramRef = this.db.object('pictograms-list/' + id);
    this.pictogramRef.remove();
  }
  
}
