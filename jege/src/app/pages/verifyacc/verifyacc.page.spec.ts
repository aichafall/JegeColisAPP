import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyaccPage } from './verifyacc.page';

describe('VerifyaccPage', () => {
  let component: VerifyaccPage;
  let fixture: ComponentFixture<VerifyaccPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyaccPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyaccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
