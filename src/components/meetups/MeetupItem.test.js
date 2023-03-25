/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen, configure } from '@testing-library/react';
import { shallow } from 'enzyme';
import MeetupItem from './MeetupItem';

configure({ testIdAttribute: 'data-cy' });

test('<MeetupItem/> renders without crashing', () => {
  const wrapper = shallow(<MeetupItem />);
  expect(wrapper.exists()).toBe(true);
});

describe('Meetup-Item Card', () => {
  const meetup = {
    image: 'https://via.placeholder.com/150',
    title: 'new meetup',
    address: 'new meetup adress',
    description: 'this is a new meetup',
    handleFavoriteClick: jest.fn(),
  };

  it('should render', () => {
    render(<MeetupItem {...meetup} />);
  });

  it('should has properties indicated', () => {
    render(<MeetupItem {...meetup} />);

    screen.getByText('new meetup');
    screen.getByText('new meetup adress');
    screen.getByText('this is a new meetup');
  });

  it('clicking the button calls event like handle once', () => {
    const mockHandle = jest.fn();

    render(<MeetupItem {...meetup} handleFavoriteClick={mockHandle} />);

    const button = screen.getByTestId('add-favourite');
    fireEvent.click(button);

    expect(mockHandle).toHaveBeenCalledTimes(1);
    expect(mockHandle).not.toHaveBeenCalledTimes(3);
  });
});
