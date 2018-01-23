import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxesPageComponent } from './checkboxes-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from '../components/components.module';
import { TopicsService, ITopicsService } from '../services/topics/topics.service';
import { TopicsServiceStub } from '../services/topics/topics.service.stub';
import { By } from '@angular/platform-browser';

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

  it('button should be disabled if nothing selected', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.properties.disabled).toBeTruthy();
  })

  it('if something is selected, should be enabled', () => {
    const button = fixture.debugElement.query(By.css('button'));
    const checkbox = fixture.debugElement.query(By.css('input'));
    checkbox.nativeElement.click();
    fixture.detectChanges();
    expect(button.properties.disabled).toBeFalsy();
  })

  it('should save state into topics service', () => {
    const button = fixture.debugElement.query(By.css('button'));
    const checkbox = fixture.debugElement.queryAll(By.css('input'))[0];
    checkbox.nativeElement.click();
    fixture.detectChanges();
    const topics: ITopicsService = TestBed.get(TopicsService);
    expect(topics.getSelection()[0].selected).toBeTruthy();
  })
});
