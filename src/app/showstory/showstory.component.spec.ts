import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowstoryComponent } from './showstory.component';

describe('ShowstoryComponent', () => {
  let component: ShowstoryComponent;
  let fixture: ComponentFixture<ShowstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowstoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
