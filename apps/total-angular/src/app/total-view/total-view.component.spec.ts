import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TotalViewComponent } from './total-view.component';

describe('TotalViewComponent', () => {
  let component: TotalViewComponent;
  let fixture: ComponentFixture<TotalViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalViewComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
