import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Pictogram } from './../shared/pictogram';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pictograms-list',
  templateUrl: './pictograms-list.component.html',
  styleUrls: ['./pictograms-list.component.css']
})
export class PictogramsListComponent implements OnInit {

  p: number = 1;
  Pictogram: Pictogram[];
  hidenWhenNoPictograms: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public crudApi: CrudService, public toastr: ToastrService) { }

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

  deletePictogram(pictogram) {
    if (window.confirm('Are sure you want to delete this pictogram ?')) {
      this.crudApi.DeletePictogram(pictogram.$key);
      this.toastr.success(pictogram.firstName + ' successfully deleted!');
    }
  }

}
