import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPictogramComponent } from './web-pictogram.component';

describe('WebPictogramComponent', () => {
  let component: WebPictogramComponent;
  let fixture: ComponentFixture<WebPictogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebPictogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPictogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
