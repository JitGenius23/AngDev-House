import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingpostsComponent } from './trendingposts.component';

describe('TrendingpostsComponent', () => {
  let component: TrendingpostsComponent;
  let fixture: ComponentFixture<TrendingpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingpostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
