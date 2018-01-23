import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from './app.component';
import { TabsPageModule } from './tabs-page/tabs-page.module';
import { CheckboxesPageModule } from './checkboxes-page/checkboxes-page.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/list'
  },
  {
    path: '**',
    redirectTo: '/list'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CheckboxesPageModule,
    TabsPageModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    ),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
