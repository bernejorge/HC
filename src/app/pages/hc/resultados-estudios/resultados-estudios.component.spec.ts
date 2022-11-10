import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosEstudiosComponent } from './resultados-estudios.component';

describe('ResultadosEstudiosComponent', () => {
  let component: ResultadosEstudiosComponent;
  let fixture: ComponentFixture<ResultadosEstudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosEstudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
