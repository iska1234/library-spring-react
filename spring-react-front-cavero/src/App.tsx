import './App.css';
import Navbar from './layout/NavbarAndFooter/Navbar';
import { Footer } from './layout/NavbarAndFooter/Footer';
import { HomePage } from './layout/HomePage/HomePage';
import { SearchBooksPages } from './layout/SearchBooksPages/SearchBooksPages';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { BookCheckoutPage } from './layout/SearchBookPage/BookCheckoutPage';
import { oktaConfig } from './lib/oktaConfig';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';
import { Shelfpage } from './layout/ShelfPage/Shelfpage';
import { MessagesPage } from './layout/MessagesPage/MessagesPage';
import { ManageLibraryPage } from './layout/ManageLibraryPage/ManageLibraryPage';


const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {

  const customAuthHandler = () => {
    history.push('/login');
  }

  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  }

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
        <Navbar />
        <div className='flex-grow-1'>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/home' />
            </Route>
            <Route path='/home'>
              <HomePage />
            </Route>
            <Route path='/search'>
              <SearchBooksPages />
            </Route>
            <Route path='/checkout/:bookId'>
              <BookCheckoutPage />
            </Route>
            <Route path='/login' render={
              () => <LoginWidget config={oktaConfig} />
               } />
            <Route path='/login/callback' component={LoginCallback} />
            <SecureRoute path='/shelf'><Shelfpage/></SecureRoute>
            <SecureRoute path='/messages'><MessagesPage/></SecureRoute>
            <SecureRoute path='/admin'><ManageLibraryPage/></SecureRoute>
          </Switch>
        </div>
        <Footer />
      </Security>
    </div>
  );
}