import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmessagesComponent } from './newmessages.component';

describe('NewmessagesComponent', () => {
  let component: NewmessagesComponent;
  let fixture: ComponentFixture<NewmessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
