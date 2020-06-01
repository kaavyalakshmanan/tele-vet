import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

// Note that this structure is recommend by https://create-react-app.dev/docs/running-tests/
// Tests should be located in a directory next to files that they are testing
// Create React App uses Jest as its test runner. All scripts need to be located at any level in the src dir
// or in a directory named __Tests__
// @Nick
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
