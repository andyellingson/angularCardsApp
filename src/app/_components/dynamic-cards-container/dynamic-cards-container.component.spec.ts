import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TooltipModule } from 'ng2-tooltip-directive';
import { DynamicCardsContainerComponent } from './dynamic-cards-container.component';

describe('DynamicCardsContainerComponent', () => {
  let component: DynamicCardsContainerComponent;
  let fixture: ComponentFixture<DynamicCardsContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCardsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
