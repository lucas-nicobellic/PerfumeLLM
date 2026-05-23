import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemininaComponent } from './feminina.component';

describe('FemininaComponent', () => {
  let component: FemininaComponent;
  let fixture: ComponentFixture<FemininaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FemininaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FemininaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
