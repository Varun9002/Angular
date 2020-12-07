import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCenterComponent } from './comp-center.component';

describe('CompCenterComponent', () => {
  let component: CompCenterComponent;
  let fixture: ComponentFixture<CompCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
