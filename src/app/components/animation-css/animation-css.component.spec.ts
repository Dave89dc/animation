import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationCssComponent } from './animation-css.component';

describe('AnimationCssComponent', () => {
  let component: AnimationCssComponent;
  let fixture: ComponentFixture<AnimationCssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationCssComponent]
    });
    fixture = TestBed.createComponent(AnimationCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
