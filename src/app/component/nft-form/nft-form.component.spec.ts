import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftFormComponent } from './nft-form.component';

describe('NftFormComponent', () => {
  let component: NftFormComponent;
  let fixture: ComponentFixture<NftFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftFormComponent]
    });
    fixture = TestBed.createComponent(NftFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
