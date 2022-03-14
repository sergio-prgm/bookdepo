import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltCardComponent } from './alt-card.component';

describe('AltCardComponent', () => {
  let component: AltCardComponent;
  let fixture: ComponentFixture<AltCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
