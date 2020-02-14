import { async, TestBed } from '@angular/core/testing';
import { UmdModule } from './umd.module';

describe('UmdModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UmdModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UmdModule).toBeDefined();
  });
});
