import { Link } from 'react-router-dom';

const Dogs = () => {
  // useEffect(() => {
  //   // якщо потрібно зробити HTTP-запит, то використай useEffect
  // }, []);

  return (
    <div>
      {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5', 'dog-6'].map(dog => {
        return (
          <Link to={`${dog}`} key={dog}>
            {dog}
          </Link>
        );
      })}
    </div>
  );
};

export default Dogs;
