import { useSelector } from 'react-redux';

const UserPreview = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="mt-4">
      <h2>Preview</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
    </div>
  );
};

export default UserPreview;
