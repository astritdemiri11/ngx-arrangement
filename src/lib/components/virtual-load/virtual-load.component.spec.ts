import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualLoadComponent } from './virtual-load.component';

describe('VirtualLoadComponent', () => {
  let component: VirtualLoadComponent;
  let fixture: ComponentFixture<VirtualLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
