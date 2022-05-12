import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictogramsListComponent } from './pictograms-list.component';

describe('PictogramsListComponent', () => {
  let component: PictogramsListComponent;
  let fixture: ComponentFixture<PictogramsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictogramsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictogramsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
