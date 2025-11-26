import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonComponentsModule } from './common-components.module';

describe('CommonComponentsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonComponentsModule).toBeDefined();
  });
});
