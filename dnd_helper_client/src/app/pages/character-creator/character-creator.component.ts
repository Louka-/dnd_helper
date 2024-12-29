import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RaceService } from '../../services/race.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { map, Observable, tap } from 'rxjs';
import { Race, RaceDetails } from '../../models/race.model';

@Component({
  selector: 'character-creator',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './character-creator.component.html',
  styleUrl: './character-creator.component.scss'
})
export class CharacterCreatorComponent implements OnInit {

  races: Race[] = [];
  selectedRace = '';
  race: RaceDetails = {
    starting_proficiency_options: {
      choose: 0,
      description: 'truc',
      options: [{
        index: 'truc', name: 'truc', url: 'truc'
      }]
    }
  } as RaceDetails;

  constructor(
    private raceService: RaceService,
  ) { }

  ngOnInit(): void {
    this.raceService.getAllRaces().pipe(
      map(allRaces => allRaces.forEach(r => this.races.push(r)))
    ).subscribe();
  }

  getRaceById(): void {
    console.log(this.selectedRace)
    this.raceService.getRaceById(this.selectedRace).pipe(
      map(result => this.race = result),
      map(data => console.log(data))
    ).subscribe();
  }
}
