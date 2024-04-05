import { harvardArt } from './data/harvardArt.js';
import { Route,Switch } from 'react-router-dom';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation records={harvardArt.records} />
      <Switch>
        <Route exact path={`/galleries/:galleryId`}>
          <GalleryView records={harvardArt.records} />
        </Route>
        <Route exact path={`/`}>
          <h2>Harvard Art Museum</h2>
          <p>Look, but Don't Touch. Please select a Gallery in the navigation bar</p>
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
