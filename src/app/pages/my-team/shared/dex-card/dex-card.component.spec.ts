import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexCardComponent } from './dex-card.component';

describe('DexCardComponent', () => {
  let component: DexCardComponent;
  let fixture: ComponentFixture<DexCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DexCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
