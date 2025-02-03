import { selectBackgroundsState, selectAllBackgrounds, selectBackgroundDetails, selectBackgroundById } from './background.selectors';
import { BackgroundState } from './background.reducer';
import { Background, BackgroundDetails } from '../../models/background.model';

describe('Background Selectors', () => {
  const mockBackgrounds: Background[] = [
    { index: 'background1', name: 'Background 1', url: 'api/backgrounds' },
    { index: 'background2', name: 'Background 2', url: 'api/backgrounds' },
  ];

  const mockBackgroundDetails: BackgroundDetails[] = [
    {
      index: 'background1',
      name: 'Background 1',
      starting_proficiencies: [],
      language_options: [],
      starting_equipment: [],
      starting_equipment_options: [],
      url: 'api/backgrounds/background1',
    },
    {
      index: 'background2',
      name: 'Background 2',
      starting_proficiencies: [],
      language_options: [],
      starting_equipment: [],
      starting_equipment_options: [],
      url: 'api/backgrounds/background2',
    }
  ];

  const initialState: BackgroundState = {
    backgrounds: mockBackgrounds,
    backgroundDetails: mockBackgroundDetails,
  };

  it('should select the backgrounds state', () => {
    const result = selectBackgroundsState.projector(initialState);
    expect(result).toEqual(initialState);
  });

  it('should select all backgrounds', () => {
    const result = selectAllBackgrounds.projector(initialState);
    expect(result).toEqual(mockBackgrounds);
  });

  it('should select all background details', () => {
    const result = selectBackgroundDetails.projector(initialState);
    expect(result).toEqual(mockBackgroundDetails);
  });

  it('should select background by id', () => {
    const result = selectBackgroundById('background1').projector(initialState);
    expect(result).toEqual(mockBackgroundDetails[0]);
  });

  it('should return undefined if background by id not found', () => {
    const result = selectBackgroundById('nonexistent').projector(initialState);
    expect(result).toBeUndefined();
  });
});
