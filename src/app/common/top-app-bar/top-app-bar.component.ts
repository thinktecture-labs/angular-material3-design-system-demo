import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'labs-top-app-bar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './top-app-bar.component.html',
  styleUrls: ['./top-app-bar.component.scss']
})
export class TopAppBarComponent {

}
