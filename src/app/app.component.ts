import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="background">
    <div class="content">
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
}
