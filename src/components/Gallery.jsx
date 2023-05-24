import { useParams } from 'react-router';

export const Gallery = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  //   // якщо потрібно зробити HTTP-запит, то використай useEffect
  // }, []);

  return <div>Image Gallery: {dogId}</div>;
};
