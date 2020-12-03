import userEvent from '@testing-library/user-event';

import { createSource, createPlayground } from '../../../../test/utils';

describe('getSources', () => {
  test('gets calls on input', () => {
    const getSources = jest.fn(() => {
      return [createSource()];
    });
    const { inputElement } = createPlayground({ getSources });

    inputElement.focus();
    userEvent.type(inputElement, 'a');

    expect(getSources).toHaveBeenCalledTimes(1);
    expect(getSources).toHaveBeenCalledWith({
      query: 'a',
      refresh: expect.any(Function),
      setCollections: expect.any(Function),
      setContext: expect.any(Function),
      setIsOpen: expect.any(Function),
      setQuery: expect.any(Function),
      setSelectedItemId: expect.any(Function),
      setStatus: expect.any(Function),
      state: {
        collections: [],
        completion: null,
        context: {},
        isOpen: false,
        query: 'a',
        selectedItemId: null,
        status: 'loading',
      },
    });
  });
});
