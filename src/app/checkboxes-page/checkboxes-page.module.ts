import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { TabComponent, TabsComponent } from '../components/tabs/tabs.component';
import { ComponentsModule } from '../components/components.module';
import { CheckboxesPageComponent } from './checkboxes-page.component';
import { TopicsService } from '../services/topics/topics.service';

const routes: Routes = [
  { path: 'list', component: CheckboxesPageComponent },
];

@NgModule({
  declarations: [
    CheckboxesPageComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
  ],
  providers: [
    TopicsService,
  ]
})
export class CheckboxesPageModule { }
