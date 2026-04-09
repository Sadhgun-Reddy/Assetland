import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ForSale from './ForSale';

test('Benchmark ForSale render', () => {
  const start = performance.now();
  for (let i = 0; i < 1000; i++) {
    const { unmount } = render(
      <BrowserRouter>
        <ForSale />
      </BrowserRouter>
    );
    unmount();
  }
  const end = performance.now();
  console.log(`Benchmark ForSale render: ${end - start} ms`);
});
