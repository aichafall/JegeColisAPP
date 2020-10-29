import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BravoPage } from './bravo.page';

describe('BravoPage', () => {
  let component: BravoPage;
  let fixture: ComponentFixture<BravoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BravoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BravoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
