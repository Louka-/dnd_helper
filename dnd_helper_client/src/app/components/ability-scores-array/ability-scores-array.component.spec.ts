// import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
// import { AbilityScoresArrayComponent } from './ability-scores-array.component';
// import { MockStore, provideMockStore } from '@ngrx/store/testing';
// import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
// import { AbilityScoresSelectorComponent } from '../ability-scores-selector/ability-scores-selector.component';
// import { selectAvailablePoints, selectChaAbilityBonus, selectConAbilityBonus, selectCurrentAbilityBonuses, selectDexAbilityBonus, selectIntAbilityBonus, selectStrAbilityBonus, selectWisAbilityBonus } from '../../store/draft-character-state/draft-character.selectors';
// import { draftCharacterActions } from '../../store/draft-character-state/draft-character.actions';

// describe('AbilityScoresArrayComponent', () => {
//   let component: AbilityScoresArrayComponent;
//   let fixture: ComponentFixture<AbilityScoresArrayComponent>;
//   let store: MockStore;

//   const initialState = {
//     availablePoints: 27,
//     strAbilityBonus: {
//       ability_score: {
//         index: 'str',
//         name: 'STR',
//         url: '/api/ability-scores/str',
//       },
//       bonus: 8
//     },
//     conAbilityBonus: {
//       ability_score: {
//         index: 'con',
//         name: 'CON',
//         url: '/api/ability-scores/con',
//       },
//       bonus: 8
//     },
//     dexAbilityBonus: {
//       ability_score: {
//         index: 'dex',
//         name: 'DEX',
//         url: '/api/ability-scores/dex',
//       },
//       bonus: 8
//     },
//     intAbilityBonus: {
//       ability_score: {
//         index: 'int',
//         name: 'INT',
//         url: '/api/ability-scores/int',
//       },
//       bonus: 8
//     },
//     wisAbilityBonus: {
//       ability_score: {
//         index: 'wis',
//         name: 'WIS',
//         url: '/api/ability-scores/wis',
//       },
//       bonus: 8
//     },
//     chaAbilityBonus: {
//       ability_score: {
//         index: 'cha',
//         name: 'CHA',
//         url: '/api/ability-scores/cha',
//       },
//       bonus: 8
//     },
//     abilityBonuses: [{
//       ability_score: {
//         index: 'str',
//         name: 'STR',
//         url: '/api/ability-scores/str',
//       },
//       bonus: 0
//     },
//     {
//       ability_score: {
//         index: 'con',
//         name: 'CON',
//         url: '/api/ability-scores/con',
//       },
//       bonus: 0
//     },
//     {
//       ability_score: {
//         index: 'dex',
//         name: 'DEX',
//         url: '/api/ability-scores/dex',
//       },
//       bonus: 0
//     },
//     {
//       ability_score: {
//         index: 'int',
//         name: 'INT',
//         url: '/api/ability-scores/int',
//       },
//       bonus: 0
//     },
//     {
//       ability_score: {
//         index: 'wis',
//         name: 'WIS',
//         url: '/api/ability-scores/wis',
//       },
//       bonus: 0
//     },
//     {
//       ability_score: {
//         index: 'cha',
//         name: 'CHA',
//         url: '/api/ability-scores/cha',
//       },
//       bonus: 0
//     },]
//   };

//   beforeEach(() =>
//     MockBuilder(AbilityScoresArrayComponent)
//     .mock(AbilityScoresSelectorComponent)
//     .provide(
//       provideMockStore({ initialState: initialState }),
//     )
//   );

//   beforeEach(() => {
//     fixture = MockRender(AbilityScoresArrayComponent);
//     component = ngMocks.findInstance(
//       AbilityScoresArrayComponent
//     );
//     store = TestBed.inject(MockStore);

//     store.overrideSelector(selectAvailablePoints, 10);
//     store.overrideSelector(selectStrAbilityBonus, initialState.strAbilityBonus);
//     store.overrideSelector(selectConAbilityBonus, initialState.conAbilityBonus);
//     store.overrideSelector(selectDexAbilityBonus, initialState.dexAbilityBonus);
//     store.overrideSelector(selectIntAbilityBonus, initialState.intAbilityBonus);
//     store.overrideSelector(selectWisAbilityBonus, initialState.wisAbilityBonus);
//     store.overrideSelector(selectChaAbilityBonus, initialState.chaAbilityBonus);
//     store.overrideSelector(selectCurrentAbilityBonuses, initialState.abilityBonuses);
//     component.ngOnInit();

//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should display available points', () => {
//     const availablePointsElement = ngMocks.find('.available-points').nativeElement;
//     expect(availablePointsElement.textContent).toContain('10');
//   });

//   it('should display strength ability bonus', () => {
//     component.strAbilityBonus$.subscribe(value => {
//       expect(value.ability_score.name).toBe('STR');
//       expect(value.bonus).toBe(0);
//     });
//   });

//   it('should increment available points on increment call', () => {
//     const dispatchSpy = jest.spyOn(store, 'dispatch');
//     component.increment();
//     expect(dispatchSpy).toHaveBeenCalledWith(draftCharacterActions.increaseAbilityPoints());
//   });

//   it('should decrement available points on decrement call', () => {
//     const dispatchSpy = jest.spyOn(store, 'dispatch');
//     component.decrement();
//     expect(dispatchSpy).toHaveBeenCalledWith(draftCharacterActions.decreaseAbilityPoints());
//   });

//   it('should reset available points on resetAvailablePoints call', () => {
//     const dispatchSpy = jest.spyOn(store, 'dispatch');
//     component.resetAvailablePoints();
//     expect(dispatchSpy).toHaveBeenCalledWith(draftCharacterActions.resetAbilityPoints());
//   });

//   it('should calculate ability modifier correctly', () => {
//     const result = component.getBonusCaracteristique(14);
//     expect(result).toBe('(+2)');
//   });
// });
