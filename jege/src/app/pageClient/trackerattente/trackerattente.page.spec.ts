import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrackerattentePage } from './trackerattente.page';

describe('TrackerattentePage', () => {
  let component: TrackerattentePage;
  let fixture: ComponentFixture<TrackerattentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerattentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackerattentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
