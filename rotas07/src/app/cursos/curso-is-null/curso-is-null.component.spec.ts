/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CursoIsNullComponent } from './curso-is-null.component';

describe('CursoIsNullComponent', () => {
  let component: CursoIsNullComponent;
  let fixture: ComponentFixture<CursoIsNullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoIsNullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoIsNullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
