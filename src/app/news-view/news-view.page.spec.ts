import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsViewPage } from './news-view.page';

describe('NewsViewPage', () => {
  let component: NewsViewPage;
  let fixture: ComponentFixture<NewsViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
