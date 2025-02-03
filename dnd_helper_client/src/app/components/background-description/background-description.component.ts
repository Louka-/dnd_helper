import { Component, Input } from '@angular/core';
import { BackgroundDetails } from '../../models/background.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'background-description',
  imports: [CommonModule],
  templateUrl: './background-description.component.html',
  styleUrl: './background-description.component.scss'
})
export class BackgroundDescriptionComponent {
  @Input() backgroundDetails$!: Observable<BackgroundDetails>;
}
