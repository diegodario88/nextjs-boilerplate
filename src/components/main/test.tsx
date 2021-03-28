import { screen, render } from '@testing-library/react';
import Main from './index';

describe('<Main />', () => {
  it('Should Render heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /Testing with Jest/ })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
