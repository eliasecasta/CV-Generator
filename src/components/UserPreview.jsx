import { useSelector } from 'react-redux';

const UserPreview = () => {
  const user = useSelector((state) => state.user);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

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
      <p>
        <strong>Company Name:</strong> {user.companyName}
      </p>
      <p>
        <strong>Position Title:</strong> {user.positionTitle}
      </p>
      <p>
        <strong>Main Responsibilities:</strong> {user.mainResponsibilities}
      </p>
      <p>
        <strong>Date From:</strong> {formatDate(user.dateFrom)}
      </p>
      <p>
        <strong>Date Until:</strong> {formatDate(user.dateUntil)}
      </p>
      <p>
        <strong>School Name:</strong> {user.school}
      </p>
      <p>
        <strong>Title of Study:</strong> {user.titleOfStudy}
      </p>
      <p>
        <strong>Date of Study:</strong> {formatDate(user.dateOfStudy)}
      </p>
    </div>
  );
};

export default UserPreview;
