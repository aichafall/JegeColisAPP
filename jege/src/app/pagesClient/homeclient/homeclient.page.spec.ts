import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeclientPage } from './homeclient.page';

describe('HomeclientPage', () => {
  let component: HomeclientPage;
  let fixture: ComponentFixture<HomeclientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeclientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeclientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
