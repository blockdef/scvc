import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import LandingPage from '../app/page'

test('LandingPage', () => {
  render(<LandingPage />)
  // Find the <p> element with the specific text
  const paragraphElement = screen.getByText(/The Smart Contract Vulnerability Classification/i);
  expect(paragraphElement).toBeDefined();

});

