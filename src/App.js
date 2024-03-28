import { harvardArt } from './data/harvardArt.js';
import { Route } from 'react-router-dom';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation records={harvardArt.records} />
        <Route path={`/galleries/:galleryId`}>
          <GalleryView records={harvardArt.records} />
        </Route>
    </div>
  );
}

export default App;
