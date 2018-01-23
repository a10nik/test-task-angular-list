import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPageComponent } from './tabs-page.component';
import { ComponentsModule } from '../components/components.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TopicsService } from '../services/topics/topics.service';
import { TopicsServiceStub } from '../services/topics/topics.service.stub';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('TabsPageComponent', () => {
  let component: TabsPageComponent;
  let fixture: ComponentFixture<TabsPageComponent>;
  let topicsServiceStub = new TopicsServiceStub();
  topicsServiceStub.setSelected('topic1', true);
  topicsServiceStub.setSelected('topic2', false);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsPageComponent ],
      imports: [ RouterTestingModule, ComponentsModule ],
      providers: [ {provide: TopicsService, useValue: topicsServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render only selected titles', () => {
    const titles = fixture.debugElement.queryAll(By.css('a'));
    expect(titles.length).toBe(1);
    expect(titles[0].nativeElement.innerText).toBe("Topic one");
  })
});
