import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifprofilPage } from './modifprofil.page';

describe('ModifprofilPage', () => {
  let component: ModifprofilPage;
  let fixture: ComponentFixture<ModifprofilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifprofilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifprofilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
