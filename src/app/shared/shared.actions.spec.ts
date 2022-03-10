import * as fromShared from './shared.actions';

describe('sharedShareds', () => {
  it('should return an action', () => {
    expect(fromShared.sharedShareds().type).toBe('[Shared] Shared Shareds');
  });
});
