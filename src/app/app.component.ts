import { Component } from '@angular/core';
import { containers as CONTAINERS } from './shared/containers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'glascontainer-magdeburg';
  containers = CONTAINERS;

  trackByFn(index: number): number {
    return index;
  }

}
