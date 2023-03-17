import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaahDoComponent } from './salaah-do.component';

describe('SalaahDoComponent', () => {
  let component: SalaahDoComponent;
  let fixture: ComponentFixture<SalaahDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaahDoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaahDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
