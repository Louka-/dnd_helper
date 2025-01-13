import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { RaceDetails } from '../../models/race.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'race-description',
  imports: [CommonModule],
  templateUrl: './race-description.component.html',
  styleUrl: './race-description.component.scss'
})
export class RaceDescriptionComponent {
  @Input() raceDetails$!: Observable<RaceDetails>;
}
