import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionFormComponent } from './collection-form.component';

describe('CollectionFormComponent', () => {
  let component: CollectionFormComponent;
  let fixture: ComponentFixture<CollectionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionFormComponent]
    });
    fixture = TestBed.createComponent(CollectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
