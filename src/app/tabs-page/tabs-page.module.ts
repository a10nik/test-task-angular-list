import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsPageComponent } from './tabs-page.component';
import { RouterModule, Routes }  from '@angular/router';
import { TabComponent, TabsComponent } from '../components/tabs/tabs.component';
import { TopicsService } from '../services/topics.service';
import { ComponentsModule } from '../components/components.module';

const appRoutes: Routes = [
  { path: 'tabs/:tabNumber', component: TabsPageComponent },
];

@NgModule({
  declarations: [
    TabsPageComponent,
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
export class TabsPageModule { }
