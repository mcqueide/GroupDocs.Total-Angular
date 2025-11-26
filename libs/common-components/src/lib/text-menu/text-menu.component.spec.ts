import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TextMenuComponent } from './text-menu.component';

describe('TextMenuComponent', () => {
  let component: TextMenuComponent;
  let fixture: ComponentFixture<TextMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
