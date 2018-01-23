import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicsService, TopicModel } from '../services/topics/topics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tabs-page',
  template: `
      <tabs [activeIndex]="activeTabNumber">
        <tab *ngFor="let topic of topics; index as i" [title]="topic.title" routerLink="../{{i}}">
          <ng-template #content>
            {{topic.content}}
          </ng-template>
        </tab>
      </tabs>
      `,
  styleUrls: ['./tabs-page.component.less']
})
export class TabsPageComponent implements OnInit {
  private activeTabNumber: number;

  constructor(
    private topicService: TopicsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }
  
  private topics: TopicModel[];

  ngOnInit() {
    this.topics = this.topicService
      .getSelection()
      .filter(t => t.selected)
      .map(t => t.topic);
    if (this.topics.length === 0) {
      this.router.navigate(['']);
    }
    this.route.paramMap.subscribe(p => {
      this.activeTabNumber = +p.get('tabNumber');
    });
  }

}
