import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingToChildComponent } from './data-binding-to-child.component';

describe('DataBindingToChildComponent', () => {
  let component: DataBindingToChildComponent;
  let fixture: ComponentFixture<DataBindingToChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingToChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
