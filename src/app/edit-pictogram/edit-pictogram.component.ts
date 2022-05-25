import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-pictogram',
  templateUrl: './edit-pictogram.component.html',
  styleUrls: ['./edit-pictogram.component.css']
})
export class EditPictogramComponent implements OnInit {

  editForm: FormGroup;

  constructor(private crudApi: CrudService, private fb: FormBuilder, private location: Location, private actRoute: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.updatePictogramData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetPictogram(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data);
      });
  }

  get namePictogram() {
    return this.editForm.get('namePictogram');
  }

  get imagePictogram() {
    return this.editForm.get('imagePictogram');
  }

  updatePictogramData() {
    this.editForm = this.fb.group({
      namePictogram: ['', [Validators.required]],
      imagePictogram: ['', [Validators.required]],
    });
  }

  goBack() {
    this.location.back();
  }

  updateForm() {
    this.crudApi.UpdatePictogram(this.editForm.value);
    this.toastr.success(
      this.editForm.controls['namePictogram'].value + 'update successfully'
    );
    this.router.navigate(['view-pictograms']);
  }

}
