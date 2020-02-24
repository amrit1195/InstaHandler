import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramLoginComponent } from './instagram-login.component';
import {describe, expect} from 'jasmine';

describe('InstagramLoginComponent', () => {
  let component: InstagramLoginComponent;
  let fixture: ComponentFixture<InstagramLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
