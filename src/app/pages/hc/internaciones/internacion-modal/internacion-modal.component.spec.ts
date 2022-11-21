import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternacionModalComponent } from './internacion-modal.component';

describe('InternacionModalComponent', () => {
  let component: InternacionModalComponent;
  let fixture: ComponentFixture<InternacionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternacionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternacionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
