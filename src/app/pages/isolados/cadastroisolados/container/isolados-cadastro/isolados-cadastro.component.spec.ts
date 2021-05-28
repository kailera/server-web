import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoladosCadastroComponent } from './isolados-cadastro.component';

describe('IsoladosCadastroComponent', () => {
  let component: IsoladosCadastroComponent;
  let fixture: ComponentFixture<IsoladosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsoladosCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoladosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
