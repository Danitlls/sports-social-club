import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldHockeyComponent } from './field-hockey.component';

describe('FieldHockeyComponent', () => {
  let component: FieldHockeyComponent;
  let fixture: ComponentFixture<FieldHockeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldHockeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldHockeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
