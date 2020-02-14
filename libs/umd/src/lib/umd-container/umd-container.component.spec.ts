import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmdContainerComponent } from './umd-container.component';

describe('UmdContainerComponent', () => {
  let component: UmdContainerComponent;
  let fixture: ComponentFixture<UmdContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmdContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmdContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
