import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdriverComponent } from './dialogdriver.component';

describe('DialogdriverComponent', () => {
  let component: DialogdriverComponent;
  let fixture: ComponentFixture<DialogdriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogdriverComponent]
    });
    fixture = TestBed.createComponent(DialogdriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
