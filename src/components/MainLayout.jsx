import { useState } from 'react';
import UserGeneralInfo from './UserGeneralInfo';
import UserJobInfo from './UserJobInfo';
import UserEducationInfo from './UserEducationInfo';
import UserPreview from './UserPreview';
import '../styles/MainLayout.css'; // Import custom CSS for dark theme

const MainLayout = () => {
  const [selectedComponent, setSelectedComponent] = useState('general');

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'general':
        return <UserGeneralInfo />;
      case 'job':
        return <UserJobInfo />;
      case 'education':
        return <UserEducationInfo />;
      default:
        return <UserGeneralInfo />;
    }
  };

  return (
    <div className="container bg-dark text-light">
      <div className="row justify-content-between">
        <div className="col-md-5">
          <div className="d-flex justify-content-center mb-4">
            <button
              className="btn btn-secondary me-2"
              onClick={() => setSelectedComponent('general')}
            >
              General Info
            </button>
            <button
              className="btn btn-secondary me-2"
              onClick={() => setSelectedComponent('job')}
            >
              Job Info
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setSelectedComponent('education')}
            >
              Education Info
            </button>
          </div>
          {renderSelectedComponent()}
        </div>
        <div className="col-md-5">
          <UserPreview />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
