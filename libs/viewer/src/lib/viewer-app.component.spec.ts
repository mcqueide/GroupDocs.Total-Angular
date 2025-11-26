import { TestBed, waitForAsync } from '@angular/core/testing';
import { ViewerAppComponent } from './viewer-app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ViewerAppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ViewerAppComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  }));
});
