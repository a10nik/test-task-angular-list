import { Injectable } from '@angular/core';

export interface TopicModel {
  title: string;
  content: string;
  id: string;
}

export interface TopicSelection {
  topic: TopicModel;
  selected: boolean;
}

@Injectable()
export class TopicsService {
  private localStorageKey: string = "activeTopicIds";
  constructor() {}

  private getActiveIds(): Set<string> {
    const idsJson = localStorage.getItem(this.localStorageKey);
    const ids = idsJson ? JSON.parse(idsJson) : []
    return new Set<string>(ids);
  }

  private setActiveIds(ids: Set<string>) {
    const json = JSON.stringify(Array.from(ids));
    localStorage.setItem(this.localStorageKey, json);
  }

  public getSelection(): TopicSelection[] {
    const activeIds = this.getActiveIds();
    return this
      .topics
      .map(topic => ({topic, selected: activeIds.has(topic.id)}));
  }

  public setSelected({topic, selected}: TopicSelection) {
    const activeIds = this.getActiveIds();
    if (selected) {
      activeIds.add(topic.id);
    } else {
      activeIds.delete(topic.id);
    }
    this.setActiveIds(activeIds);
  }

  private get topics(): TopicModel[] {
    return [
      {
        id: "analytics",
        title: "Аналитика",
        content: "Я, аналитика, тут."
      },
      {
        id: "events",
        title: "События",
        content: "Вот они мы, события."
      }
    ]
  }
}
