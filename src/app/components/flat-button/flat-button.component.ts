import { Component, OnChanges, ContentChildren, ContentChild, QueryList, AfterContentInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

@Component({
  selector: 'flat-button',
  styleUrls: [`./flat-button.component.less`],
  template: `
    <button class="button" type="button" (click)="click.emit($event)" [disabled]="disabled" [routerLink]="routerLink">
      <ng-content></ng-content>
    </button>
  `
})
export class FlatButtonComponent { 
  @Output() click = new EventEmitter<any>();
  @Input() disabled = false;
  @Input() routerLink = null;
}
