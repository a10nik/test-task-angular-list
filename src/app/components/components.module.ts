import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent, TabComponent } from './tabs/tabs.component';
import { RouterModule } from '@angular/router';
import { FlatButtonComponent } from './flat-button/flat-button.component';

const declarations = [
  TabComponent,
  TabsComponent,
  FlatButtonComponent,
];

@NgModule({
  declarations,
  imports: [
    CommonModule,
    RouterModule,    
  ],
  exports: declarations,
  providers: [
  ]
})
export class ComponentsModule { }
