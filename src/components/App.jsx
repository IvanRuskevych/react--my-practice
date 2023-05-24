import { Route, Routes } from 'react-router-dom';
import Dogs from 'pages/Dogs';
import Home from 'pages/Home';
import DogDetails from 'pages/DogDetails';
import LayOut from 'components/LayOut';
import { Gallery } from './Gallery';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/dogs/:dogId" element={<DogDetails />}>
          <Route path="subbreeds" element={<div>subbreeds--page</div>} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};
