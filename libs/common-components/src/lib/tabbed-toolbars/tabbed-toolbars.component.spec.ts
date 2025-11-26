import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabbedToolbarsComponent } from './tabbed-toolbars.component';

describe('TabbedToolbarsComponent', () => {
  let component: TabbedToolbarsComponent;
  let fixture: ComponentFixture<TabbedToolbarsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedToolbarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedToolbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
