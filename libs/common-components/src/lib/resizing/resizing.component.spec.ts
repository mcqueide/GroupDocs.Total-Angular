import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResizingComponent } from './resizing.component';

describe('ResizingComponent', () => {
  let component: ResizingComponent;
  let fixture: ComponentFixture<ResizingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
