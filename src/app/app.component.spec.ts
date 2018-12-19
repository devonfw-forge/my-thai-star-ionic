import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MyApp } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let component: MyApp;
  let fixture: ComponentFixture<MyApp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
