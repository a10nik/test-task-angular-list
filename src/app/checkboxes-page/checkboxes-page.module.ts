import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { TabComponent, TabsComponent } from '../components/tabs/tabs.component';
import { TopicsService } from '../services/topics.service';
import { ComponentsModule } from '../components/components.module';
import { CheckboxesPageComponent } from './checkboxes-page.component';

const appRoutes: Routes = [
  { path: 'list', component: CheckboxesPageComponent },
];

@NgModule({
  declarations: [
    CheckboxesPageComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(appRoutes),
  ],
  exports: [
  ],
  providers: [
    TopicsService,
  ]
})
export class CheckboxesPageModule { }
