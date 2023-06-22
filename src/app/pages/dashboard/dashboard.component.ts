import {CommonModule, NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {ActiveProjectCardComponent} from '../../common/active-project-card/active-project-card.component';
import {PreviewCardComponent} from '../../common/preview-card/preview-card.component';
import {Project} from '../../shared/models/project';

@Component({
  selector: 'labs-dashboard',
  standalone: true,
  imports: [CommonModule, PreviewCardComponent, NgFor, ActiveProjectCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  items: Project[] = [
    {id: '1', title: 'Title 1', preview: 'assets/images/project-1.png'},
    {id: '2', title: 'Title 2', preview: 'assets/images/project-2.png'},
    {id: '3', title: 'Title 3', preview: 'assets/images/project-3.png'}];
  activeItem:Project = {id: '4', title: 'Title 4', preview: ''};
}
