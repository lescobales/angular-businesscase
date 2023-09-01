import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftListComponent } from './nft-list.component';

describe('NftListComponent', () => {
  let component: NftListComponent;
  let fixture: ComponentFixture<NftListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftListComponent]
    });
    fixture = TestBed.createComponent(NftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
