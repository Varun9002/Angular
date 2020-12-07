import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBlComponent } from './comp-bl.component';

describe('CompBlComponent', () => {
  let component: CompBlComponent;
  let fixture: ComponentFixture<CompBlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompBlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompBlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
