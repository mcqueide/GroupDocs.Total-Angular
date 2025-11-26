import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnnotationAppComponent } from './annotation-app.component';

describe('AnnotationAppComponent', () => {
  let component: AnnotationAppComponent;
  let fixture: ComponentFixture<AnnotationAppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotationAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotationAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
