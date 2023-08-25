import { configure, fireEvent, render, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';

import { mockComponent } from '../../utils/test-helpers/mockComponent';
import NewMeetupForm from './NewMeetupForm';
import { addNewMeetup } from '../../stores/meetups.slice';
import userEvent from '@testing-library/user-event';

configure({ testIdAttribute: 'data-cy' });

jest.mock('../ui/Card', () => props => mockComponent('Card', props));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => jest.fn(() => null))
}));

jest.mock('../../stores/meetups.slice', () => ({
  ...jest.requireActual('../../stores/meetups.slice'),
  addNewMeetup: jest.fn(() => jest.fn(() => null))
}));

describe('NewMeetupForm', () => {
  const defaultProps = {};
  const getComponent = props => <NewMeetupForm {...props} />;
  const setup = (props = defaultProps) => render(getComponent(props));

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(getComponent(), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should match snapshot with full props', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('Should change text of title input', async () => {
    setup();
    await waitFor(() => {
      const inputElement = screen.getByRole('textbox', { name: 'Meetup Title' });
      fireEvent.change(inputElement, { target: { value: 'New meetup test' } });
      expect(inputElement.value).toBe('New meetup test');
    });
  });

  it('Should call addNewMeetup when send all fields', async () => {
    const dispatch = jest.fn(() => null);
    ReactRedux.useDispatch.mockReturnValue(dispatch);
    setup();

    const inputElement = screen.getByRole('textbox', { name: 'Meetup Title' });
    userEvent.type(inputElement, 'New meetup test');

    const inputElement2 = screen.getByRole('textbox', { name: 'Meetup Image' });
    userEvent.type(inputElement2, 'Meetup Image');

    const inputElement3 = screen.getByRole('textbox', { name: 'Address' });
    userEvent.type(inputElement3, 'New address');

    const inputElement4 = screen.getByRole('textbox', { name: 'Description' });
    userEvent.type(inputElement4, 'New description');

    await waitFor(() => {
      const button = screen.getByText('Add Meetup');
      userEvent.click(button);
      expect(addNewMeetup).toHaveBeenCalledTimes(1);
      expect(addNewMeetup).toHaveBeenCalledWith({
        address: 'New address',
        description: 'New description',
        image: 'MeetupImage',
        title: 'New meetup test'
      });
    });
  });
});
