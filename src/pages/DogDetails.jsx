import { Outlet, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const DogDetails = () => {
  const { dogId } = useParams();

  // console.log(dogId);

  // useEffect(() => {
  //   // якщо потрібно зробити HTTP-запит, то використай useEffect
  // }, []);
  return (
    <div>
      <h1>{`Dog details: ${dogId}`}</h1>
      <ul>
        {' '}
        <li>
          <Link to="subbreeds">subbreeds</Link>
        </li>
        <li>
          <Link to="gallery">gallery</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default DogDetails;
