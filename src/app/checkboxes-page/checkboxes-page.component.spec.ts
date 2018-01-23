import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxesPageComponent } from './checkboxes-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from '../components/components.module';
import { TopicsService, ITopicsService } from '../services/topics/topics.service';
import { TopicsServiceStub } from '../services/topics/topics.service.stub';


describe('CheckboxesPageComponent', () => {
  let component: CheckboxesPageComponent;
  let fixture: ComponentFixture<CheckboxesPageComponent>;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [ CheckboxesPageComponent ],
      imports: [ RouterTestingModule, ComponentsModule ],
      providers: [ {provide: TopicsService, useValue: new TopicsServiceStub() } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
