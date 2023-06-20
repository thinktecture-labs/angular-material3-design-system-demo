import {CommonModule, NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';
import {MatRippleModule} from '@angular/material/core';
import {Project} from '../../shared/models/project';
@Component({
  selector: 'labs-preview-card',
  standalone: true,
  imports: [CommonModule, NgIf, MatRippleModule],
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent {
  @Input({required: true}) item?: Project;
}
