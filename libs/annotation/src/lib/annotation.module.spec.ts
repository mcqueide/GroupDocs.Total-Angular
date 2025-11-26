import { TestBed, waitForAsync } from '@angular/core/testing';
import { AnnotationModule } from './annotation.module';

describe('AnnotationModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AnnotationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AnnotationModule).toBeDefined();
  });
});
