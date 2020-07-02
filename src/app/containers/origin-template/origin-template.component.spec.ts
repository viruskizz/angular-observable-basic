import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginTemplateComponent } from './origin-template.component';

describe('OriginTemplateComponent', () => {
  let component: OriginTemplateComponent;
  let fixture: ComponentFixture<OriginTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
