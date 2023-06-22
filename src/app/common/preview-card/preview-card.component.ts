import {CommonModule, NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';
import {MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {Project} from '../../shared/models/project';
@Component({
  selector: 'labs-preview-card',
  standalone: true,
  imports: [CommonModule, NgIf, MatRippleModule, MatProgressBarModule],
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent {
  @Input({required: true}) item?: Project;
}
