import { useParams } from 'react-router';

export const Subbreeds = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  //   // якщо потрібно зробити HTTP-запит, то використай useEffect
  // }, []);

  return <div>Subbreeds: {dogId}</div>;
};
