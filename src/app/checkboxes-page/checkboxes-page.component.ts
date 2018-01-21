import { Component, OnInit } from '@angular/core';
import { TopicsService, TopicModel, TopicSelection } from '../services/topics.service';

@Component({
  selector: 'app-checkboxes-page',
  template: `
    <div class="page">
      Выберите интересующие вас вкладки:
      <div *ngFor="let topicSelection of topicsSelection" class="row">
        <label>
          <input type="checkbox" [checked]="topicSelection.selected" (change)="toggle(topicSelection)" />
          <b>{{topicSelection.topic.title}}</b>
        </label>
      </div>
      <flat-button routerLink="/tabs/0" [disabled]="!isAnythingSelected">
        Открыть выбранное
      </flat-button>
    </div>
  `,
  styleUrls: ['./checkboxes-page.component.less']
})
export class CheckboxesPageComponent implements OnInit {

  private topicsSelection: TopicSelection[];

  constructor(
    private topicsService: TopicsService,
  ) {
  }

  toggle(topicSelection: TopicSelection) {
    topicSelection.selected = !topicSelection.selected;
    this.topicsService.setSelected(topicSelection);
  }

  get isAnythingSelected() {
    return this.topicsSelection.some(t => t.selected);
  }

  ngOnInit() {
    this.topicsSelection = this.topicsService.getSelection();
  }

}
