import { getReleaseLinkByBarcode } from './index';

describe('getrelease', () => {
  it('get release link', () => {
    const result = getReleaseLinkByBarcode('123');
    console.log(result)
    expect(result).toBeTruthy();
  });

});

