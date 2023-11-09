import './App.css';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import {  BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import {Provider} from 'react-redux';
import store from './redux/store';
import PageRoutes from './routes/pageRoutes';

export const history = createBrowserHistory({ basename: '/' });
// Initialize google analytics page view tracking
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});
const App = () => (
  <>
    <BrowserRouter history={history}>
      <Provider store={store}>
        <PageRoutes />
      </Provider>
  </BrowserRouter>,
  </>
);

export default App;
