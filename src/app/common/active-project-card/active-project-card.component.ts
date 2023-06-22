import {CommonModule} from '@angular/common';
import {Component, Input, ViewEncapsulation} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {Project} from '../../shared/models/project';

@Component({
  selector: 'labs-active-project-card',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  templateUrl: './active-project-card.component.html',
  styleUrls: ['./active-project-card.component.scss'],
  // just a workaround, TODO enable emulated
  encapsulation: ViewEncapsulation.None,
})
export class ActiveProjectCardComponent {
  @Input({required: true}) item?: Project;
}
