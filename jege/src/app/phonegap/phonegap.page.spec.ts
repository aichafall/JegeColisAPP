import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhonegapPage } from './phonegap.page';

describe('PhonegapPage', () => {
  let component: PhonegapPage;
  let fixture: ComponentFixture<PhonegapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonegapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhonegapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
