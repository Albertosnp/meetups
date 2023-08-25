/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen, configure } from '@testing-library/react';
import ReactDOM from 'react-dom';
import MeetupItem from './MeetupItem';

configure({ testIdAttribute: 'data-cy' });

describe('Meetup-Item Card', () => {
  const defaultProps = {
    image: 'https://via.placeholder.com/150',
    title: 'new meetup',
    address: 'new meetup adress',
    description: 'this is a new meetup',
    handleFavoriteClick: jest.fn()
  };

  const getComponent = props => <MeetupItem {...props} />;

  const setup = (props = defaultProps) => render(getComponent(props));

  it('Should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(getComponent(), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should match snapshot with full props', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('should has properties indicated', () => {
    setup();

    screen.getByText('new meetup');
    screen.getByText('new meetup adress');
    screen.getByText('this is a new meetup');
  });

  it('clicking the button calls event like handle once', () => {
    const mockHandle = jest.fn();
    setup({ ...defaultProps, handleFavoriteClick: mockHandle });

    const button = screen.getByTestId('add-favourite');
    fireEvent.click(button);

    expect(mockHandle).toHaveBeenCalledTimes(1);
    expect(mockHandle).not.toHaveBeenCalledTimes(3);
  });
});
