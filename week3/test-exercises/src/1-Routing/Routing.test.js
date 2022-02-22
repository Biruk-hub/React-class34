import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import TEST_ID from './testids';

// taken from react router docs
const renderWithRouter = (component, { route = '/' } = {}) => {
  //history.push takes 3 parameters(state , title, url)
  window.history.pushState({},'', route);
  return render(component, { wrapper: BrowserRouter });
};


/**
 * Routing is a very simple routing component that looks to route a couple of pages for the user.
 * Implementing routing is actually quite simple, but routing can be a little more tricky if you don't know the tricks.
 * Have a look at the react-router-dom documentation and see how you can implement the tests. For routing you want to test:
 *
 * - Check every route that it goes to the right component. Remember that you don't need to test anything in the component you routed to! That is for that component's tests to handle.
 * - Check that a route that has a parameter (:id usually) correctly grabs that parameter.
 *
 * You may be wondering how it works with buttons on pages that redirect to other pages (a list component going to a details component for example). That is also the responsibility of the tests in that component.
 */

 describe('Routing', () => {
  it('Goes to the home page on /', () => {
    renderWithRouter(<Routing />);
    expect(screen.getByTestId(TEST_ID.HOME_CONTAINER)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_ID.HOME_CONTAINER)).toHaveTextContent(
      'This is the Home page'
    );
  });

  it('Goes to the users page on /users', () => {
    renderWithRouter(<Routing />, { route: '/users' });
    expect(screen.getByTestId(TEST_ID.USER_LIST_CONTAINER)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_ID.USER_LIST_CONTAINER)).toHaveTextContent(
      'This is the Users page'
    );
  });

  it('Goes to the user details page on /users/:id', () => {
    renderWithRouter(<Routing />, { route: '/users/1' });
    expect(screen.getByTestId(TEST_ID.USER_DETAILS_CONTAINER)).toBeInTheDocument();
    expect(
      screen.getByTestId(TEST_ID.USER_DETAILS_CONTAINER)
    ).toHaveTextContent('This is the User details page');

    expect(screen.getByTestId(TEST_ID.USER_DETAILS_CONTAINER)).toHaveAttribute(
      'data-testelementid',
      '1'
    );
  });

  it('Goes to the home page if the url is not recognized', () => {
    renderWithRouter(<Routing />, { route: '/unrecognized_url' });
    expect(screen.getByText('This is the Home page')).toBeInTheDocument();
  });
});

