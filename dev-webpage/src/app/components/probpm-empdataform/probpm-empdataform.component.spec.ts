import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbpmEmpdataformComponent } from './probpm-empdataform.component';

describe('ProbpmEmpdataformComponent', () => {
  let component: ProbpmEmpdataformComponent;
  let fixture: ComponentFixture<ProbpmEmpdataformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbpmEmpdataformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbpmEmpdataformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
