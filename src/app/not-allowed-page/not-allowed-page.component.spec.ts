import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAllowedPageComponent } from './not-allowed-page.component';

describe('NotAllowedPageComponent', () => {
  let component: NotAllowedPageComponent;
  let fixture: ComponentFixture<NotAllowedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotAllowedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAllowedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
