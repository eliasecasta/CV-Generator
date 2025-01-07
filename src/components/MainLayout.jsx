import { useState } from 'react';
import UserGeneralInfo from './UserGeneralInfo';
import UserJobInfo from './UserJobInfo';
import UserEducationInfo from './UserEducationInfo';
import UserPreview from './UserPreview';

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
    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <button
            className="btn btn-primary me-2"
            onClick={() => setSelectedComponent('general')}
          >
            General Info
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => setSelectedComponent('job')}
          >
            Job Info
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setSelectedComponent('education')}
          >
            Education Info
          </button>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-md-5">{renderSelectedComponent()}</div>
        <div className="col-md-5">
          <UserPreview />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
