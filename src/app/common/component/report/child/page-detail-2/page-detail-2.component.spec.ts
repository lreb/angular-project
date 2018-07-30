import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetail2Component } from './page-detail-2.component';

describe('PageDetail2Component', () => {
  let component: PageDetail2Component;
  let fixture: ComponentFixture<PageDetail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
