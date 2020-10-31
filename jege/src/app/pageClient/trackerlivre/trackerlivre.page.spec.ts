import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrackerlivrePage } from './trackerlivre.page';

describe('TrackerlivrePage', () => {
  let component: TrackerlivrePage;
  let fixture: ComponentFixture<TrackerlivrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerlivrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackerlivrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
