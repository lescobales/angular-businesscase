import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftAddComponent } from './nft-add.component';

describe('NftAddComponent', () => {
  let component: NftAddComponent;
  let fixture: ComponentFixture<NftAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftAddComponent]
    });
    fixture = TestBed.createComponent(NftAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
