import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldataComponent } from './alldata.component';

describe('AlldataComponent', () => {
  let component: AlldataComponent;
  let fixture: ComponentFixture<AlldataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlldataComponent]
    });
    fixture = TestBed.createComponent(AlldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
