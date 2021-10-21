import { Component } from "@angular/core";
import { containers as CONTAINERS } from '../../shared/containers';

@Component({
    selector: 'list-page',
    templateUrl: 'list.component.html'
})
export class ListComponent {
  containers = CONTAINERS;

  trackByFn(index: number): number {
    return index;
  }
}