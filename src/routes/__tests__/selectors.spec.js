import faker from 'faker';
import { expect } from 'chai';
import { getTestName } from '../../../test/helpers';
import * as selectors from '../selectors';

describe(getTestName(__filename), () => {
  it('selector getIsUserSynced retrieves correct data', function () {
    const expectedResult = faker.random.boolean;
    const store = {
      auth: {
        isSynced: expectedResult
      }
    };

    expect(selectors.getIsUserSynced(store)).to.be.eql(expectedResult);
  });

  describe('selector getIsUserAuthenticated retrieves correct data', () => {
    it('retrieves correct data if has user', function () {
      const mockedUser = {
        [faker.lorem.word]: faker.lorem.word
      };
      const expectedResult = true;
      const store = {
        auth: {
          user: mockedUser
        }
      };

      expect(selectors.getIsUserAuthenticated(store)).to.be.eql(expectedResult);
    });

    it('retrieves correct data if no user', function () {
      const mockedUser = undefined;
      const expectedResult = false;
      const store = {
        auth: {
          user: mockedUser
        }
      };

      expect(selectors.getIsUserAuthenticated(store)).to.be.eql(expectedResult);
    });
  });

  it('selector getUser retrieves correct data', function () {
    const mockedUser = {
      [faker.lorem.word]: faker.lorem.word
    };
    const expectedResult = mockedUser;
    const store = {
      auth: {
        user: mockedUser
      }
    };

    expect(selectors.getUser(store)).to.be.eql(expectedResult);
  });
});
