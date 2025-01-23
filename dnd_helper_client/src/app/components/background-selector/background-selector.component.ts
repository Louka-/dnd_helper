import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable, take } from 'rxjs';
import { Background, BackgroundDetails } from '../../models/background.model';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { selectAllBackgrounds, selectBackgroundById, selectBackgroundDetails } from '../../store/background-state/background.selectors';
import { backgroundsActions } from '../../store/background-state/background.actions';

@Component({
  selector: 'background-selector',
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './background-selector.component.html',
  styleUrl: './background-selector.component.scss'
})
export class BackgroundSelectorComponent implements OnInit {
  @Output('backgroundToDisplay') backgroundToDisplay = new EventEmitter<Observable<BackgroundDetails>>();
  private store = inject(Store);
  backgrounds$: Observable<Background[]> = this.store.select(selectAllBackgrounds);
  backgroundDetails$!: Observable<BackgroundDetails>;
  selectedBackground = '';

  ngOnInit(): void {
    this.store.dispatch(backgroundsActions.getAllBackgrounds());
  }

  getBackgroundById(): void {
    combineLatest({
      backgroundDetails: this.store.select(selectBackgroundDetails),
      b: this.store.select(selectBackgroundById(this.selectedBackground))
    }).pipe(
      take(1),
      map(({backgroundDetails, b}) => {
        const isAvailableCurrentBackground = b && backgroundDetails.some(storedBackgrounds =>  storedBackgrounds.index === this.selectedBackground);
        const currentBackground = backgroundDetails.find(storedBackgrounds =>  storedBackgrounds.index === this.selectedBackground);
        if(isAvailableCurrentBackground) {
          this.store.dispatch(backgroundsActions.getBackgroundFromStore({ backgroundDetails: currentBackground as BackgroundDetails }),
        )
      } else {
          this.store.dispatch(backgroundsActions.getBackgroundByIdFromApi({ index: this.selectedBackground }));
        }
      })
    ).subscribe()
    this.backgroundDetails$ = this.store.select(selectBackgroundById(this.selectedBackground)) as Observable<BackgroundDetails>;
    this.backgroundToDisplay.emit(this.backgroundDetails$);
  }
}
