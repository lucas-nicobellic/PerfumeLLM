import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDestaqueComponent } from './lista-destaque.component';

describe('ListaDestaqueComponent', () => {
  let component: ListaDestaqueComponent;
  let fixture: ComponentFixture<ListaDestaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaDestaqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
