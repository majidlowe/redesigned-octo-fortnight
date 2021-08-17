import { act } from '@testing-library/react';

export const waitForAsyncUpdates = async () => {
  await act(async () => {
    await new Promise((resolve) => setImmediate(resolve));
  });
};
