import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ThumbnailsComponent } from './thumbnails.component';

describe('ThumbnailsComponent', () => {
  let component: ThumbnailsComponent;
  let fixture: ComponentFixture<ThumbnailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailsComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
