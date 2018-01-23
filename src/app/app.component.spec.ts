import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { AppModule } from './app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let app;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
});
