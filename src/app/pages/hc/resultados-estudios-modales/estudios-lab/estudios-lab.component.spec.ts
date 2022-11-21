import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosLabComponent } from './estudios-lab.component';

describe('EstudiosLabComponent', () => {
  let component: EstudiosLabComponent;
  let fixture: ComponentFixture<EstudiosLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiosLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiosLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
