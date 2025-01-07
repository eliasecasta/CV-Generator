import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from './userSlice';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      setUserInfo({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
      }),
    );
  };

  return (
    <div className="container">
      <h1 className="text-center">Hello, {user.name || 'Bootstrap'}!</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
