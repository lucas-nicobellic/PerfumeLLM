import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUnissexComponent } from './lista-unissex.component';

describe('ListaUnissexComponent', () => {
  let component: ListaUnissexComponent;
  let fixture: ComponentFixture<ListaUnissexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaUnissexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaUnissexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
