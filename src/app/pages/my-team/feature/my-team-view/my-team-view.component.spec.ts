import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamViewComponent } from './my-team-view.component';

describe('MyTeamViewComponent', () => {
  let component: MyTeamViewComponent;
  let fixture: ComponentFixture<MyTeamViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTeamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
