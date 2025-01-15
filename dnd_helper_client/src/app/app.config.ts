import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { RaceEffects } from './store/race-state/race.effects';
import { raceReducer } from './store/race-state/race.reducer';
import { classReducer } from './store/class-state/class.reducer';
import { ClassEffects } from './store/class-state/class.effects';
import { DraftCharacterEffects } from './store/draft-character-state/draft-character.effects';
import { draftCharacterReducer } from './store/draft-character-state/draft-character.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideStore({
      races: raceReducer,
      classes: classReducer,
      draftCharacter: draftCharacterReducer,
    }),
    provideEffects(
      RaceEffects,
      ClassEffects,
      DraftCharacterEffects,
    ),
    provideStoreDevtools(),
  ]
};
