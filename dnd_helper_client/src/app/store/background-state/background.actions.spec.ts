import { backgroundsActions } from './background.actions';
import { Background, BackgroundDetails } from '../../models/background.model';

describe('backgroundsActions', () => {
  it('should create Get All Backgrounds action', () => {
    const action = backgroundsActions.getAllBackgrounds();
    expect(action.type).toBe('[Backgrounds] Get All Backgrounds');
  });

  it('should create Get All Backgrounds Success action', () => {
    const backgrounds: Background[] = [
      { index: 'background1', name: 'Background 1', url: 'api/backgrounds' },
      { index: 'background2', name: 'Background 2', url: 'api/backgrounds' },
    ];
    const action = backgroundsActions.getAllBackgroundsSuccess({ backgrounds });
    expect(action.type).toBe('[Backgrounds] Get All Backgrounds Success');
    expect(action.backgrounds).toEqual(backgrounds);
  });

  it('should create Get All Backgrounds Failure action', () => {
    const error = { message: 'Error fetching backgrounds' };
    const action = backgroundsActions.getAllBackgroundsFailure({ error });
    expect(action.type).toBe('[Backgrounds] Get All Backgrounds Failure');
    expect(action.error).toEqual(error);
  });

  it('should create Get Background By Id From Api action', () => {
    const index = 'background3';
    const action = backgroundsActions.getBackgroundByIdFromApi({ index });
    expect(action.type).toBe('[Backgrounds] Get Background By Id From Api');
    expect(action.index).toBe(index);
  });

  it('should create Get Background From Store action', () => {
    const backgroundDetails: BackgroundDetails = {
      index: 'background1',
      name: 'Background 1',
      starting_proficiencies: [],
      language_options: [],
      starting_equipment: [],
      starting_equipment_options: [],
      url: 'api/backgrounds/background1',
    };
    const action = backgroundsActions.getBackgroundFromStore({ backgroundDetails });
    expect(action.type).toBe('[Backgrounds] Get Background From Store');
    expect(action.backgroundDetails).toEqual(backgroundDetails);
  });

  it('should create Get Background Success action', () => {
    const backgroundDetails: BackgroundDetails = {
      index: 'background1',
      name: 'Background 1',
      starting_proficiencies: [],
      language_options: [],
      starting_equipment: [],
      starting_equipment_options: [],
      url: 'api/backgrounds/background1',
    };
    const action = backgroundsActions.getBackgroundSuccess({ backgroundDetails });
    expect(action.type).toBe('[Backgrounds] Get Background Success');
    expect(action.backgroundDetails).toEqual(backgroundDetails);
  });

  it('should create Get Background Failure action', () => {
    const error = { message: 'Error fetching background' };
    const action = backgroundsActions.getBackgroundFailure({ error });
    expect(action.type).toBe('[Backgrounds] Get Background Failure');
    expect(action.error).toEqual(error);
  });
});
