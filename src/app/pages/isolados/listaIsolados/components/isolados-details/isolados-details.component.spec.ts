import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoladosDetailsComponent } from './isolados-details.component';

describe('IsoladosDetailsComponent', () => {
  let component: IsoladosDetailsComponent;
  let fixture: ComponentFixture<IsoladosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsoladosDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoladosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
