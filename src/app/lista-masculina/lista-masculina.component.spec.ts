import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMasculinaComponent } from './lista-masculina.component';

describe('ListaMasculinaComponent', () => {
  let component: ListaMasculinaComponent;
  let fixture: ComponentFixture<ListaMasculinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaMasculinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMasculinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
