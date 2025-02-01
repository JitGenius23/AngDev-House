import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedpostsComponent } from './savedposts.component';

describe('SavedpostsComponent', () => {
  let component: SavedpostsComponent;
  let fixture: ComponentFixture<SavedpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedpostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
