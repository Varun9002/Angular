import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTrComponent } from './comp-tr.component';

describe('CompTrComponent', () => {
  let component: CompTrComponent;
  let fixture: ComponentFixture<CompTrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompTrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
