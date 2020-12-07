import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTlComponent } from './comp-tl.component';

describe('CompTlComponent', () => {
  let component: CompTlComponent;
  let fixture: ComponentFixture<CompTlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompTlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
