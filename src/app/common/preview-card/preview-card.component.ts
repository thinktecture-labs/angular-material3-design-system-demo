import {CommonModule, NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';
import {Project} from '../../shared/models/project';
@Component({
  selector: 'labs-preview-card',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent {
  @Input({required: true}) item?: Project;
}
