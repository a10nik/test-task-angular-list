import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPageComponent } from './tabs-page.component';
import { ComponentsModule } from '../components/components.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TopicsService } from '../services/topics/topics.service';
import { TopicsServiceStub } from '../services/topics/topics.service.stub';

describe('TabsPageComponent', () => {
  let component: TabsPageComponent;
  let fixture: ComponentFixture<TabsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsPageComponent ],
      imports: [ RouterTestingModule, ComponentsModule ],
      providers: [ {provide: TopicsService, useValue: new TopicsServiceStub() } ]
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
});
