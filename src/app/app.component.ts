import { Component } from '@angular/core';
import {CardComponent} from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CardComponent
  ],
  styles: [`
    :host {
      margin-top: 164px;
      display: flex;
      justify-content: center;
    }
  `],
  template: `
    <app-card></app-card>
  `,
})
export class AppComponent {
}
