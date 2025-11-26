import { TestBed, waitForAsync } from '@angular/core/testing';
import { ViewerModule } from './viewer.module';

describe('ViewerModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ViewerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ViewerModule).toBeDefined();
  });
});
