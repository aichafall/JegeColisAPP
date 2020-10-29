import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HereComponent } from './here.component';

describe('HereComponent', () => {
  let component: HereComponent;
  let fixture: ComponentFixture<HereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HereComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
