import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassDetails } from '../../models/class.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'class-description',
  imports: [CommonModule],
  templateUrl: './class-description.component.html',
  styleUrl: './class-description.component.scss'
})
export class ClassDescriptionComponent {
  @Input() classDetails$!: Observable<ClassDetails>;
}
