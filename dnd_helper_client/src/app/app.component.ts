import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterCreatorComponent } from './pages/character-creator/character-creator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterCreatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dnd_helper_client';
}
