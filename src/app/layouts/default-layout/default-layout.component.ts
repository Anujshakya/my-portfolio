import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent, FooterComponent} from '../../components';

@Component({
  selector: 'app-default-layout',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css',
})
export class DefaultLayoutComponent  {
}
