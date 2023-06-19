import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LogoComponent} from '../logo/logo.component';

@Component({
  selector: 'labs-top-app-bar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, LogoComponent],
  templateUrl: './top-app-bar.component.html',
  styleUrls: ['./top-app-bar.component.scss']
})
export class TopAppBarComponent {

}
