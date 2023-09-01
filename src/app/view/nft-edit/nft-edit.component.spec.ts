import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftEditComponent } from './nft-edit.component';

describe('NftEditComponent', () => {
  let component: NftEditComponent;
  let fixture: ComponentFixture<NftEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftEditComponent]
    });
    fixture = TestBed.createComponent(NftEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
