import { Component, OnChanges, ContentChildren, ContentChild, QueryList, AfterContentInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';


@Component({
  selector: 'tab',
  template: `<ng-content></ng-content>`,
})
export class TabComponent {
  @Input() title: string;
  @Input() routerLink: string;
  @ContentChild("content", {read: TemplateRef}) contentTemplate;
}

@Component({
  selector: 'tabs',
  styleUrls: [`./tabs.component.less`],
  template: `
    <div>
      <a *ngFor="let tab of tabs; index as i"
          [class.active]="i == activeIndex"
          class="header"
          [routerLink]="tab.routerLink">
        {{tab.title}}
      </a>
    </div>
    <div class="content">
      <div *ngTemplateOutlet="tabs.toArray()[activeIndex]?.contentTemplate"></div>
    </div>
  `
})
export class TabsComponent implements AfterContentInit, OnChanges {
  
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Input() activeIndex: number = 0;
  //private activeTab: TabComponent;

  ngOnChanges() {
    //this.activeTab = this.tabs.toArray()[this.activeIndex];
  }

  ngAfterContentInit() {
    //this.activeTab = this.tabs.toArray()[this.activeIndex];
  }

  @Output() tabChange = new EventEmitter<TabComponent>();
}
