import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {TopAppBarComponent} from '../top-app-bar/top-app-bar.component';

@Component({
  selector: 'labs-main-layout',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, TopAppBarComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

}
