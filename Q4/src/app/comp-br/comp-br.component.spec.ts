import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBrComponent } from './comp-br.component';

describe('CompBrComponent', () => {
  let component: CompBrComponent;
  let fixture: ComponentFixture<CompBrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompBrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompBrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
