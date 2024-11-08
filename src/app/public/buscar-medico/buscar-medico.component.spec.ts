import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMedicoComponent } from './buscar-medico.component';

describe('BuscarMedicoComponent', () => {
  let component: BuscarMedicoComponent;
  let fixture: ComponentFixture<BuscarMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarMedicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
