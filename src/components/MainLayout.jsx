import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserGeneralInfo from './UserGeneralInfo';
import UserJobInfo from './UserJobInfo';
import UserEducationInfo from './UserEducationInfo';
import UserPreview from './UserPreview';
import { resetUserInfo, clearUserInfo } from '../userSlice';
import '../styles/MainLayout.css'; // Import custom CSS for dark theme

const MainLayout = () => {
  const [selectedComponent, setSelectedComponent] = useState('general');
  const dispatch = useDispatch();

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

  const handleClearAll = () => {
    dispatch(clearUserInfo());
  };

  const handleResetToSampleData = () => {
    dispatch(resetUserInfo());
  };

  return (
    <div className="container bg-dark text-light">
      <div className="row justify-content-between">
        <div className="col-md-6">
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
              className="btn btn-secondary me-2"
              onClick={() => setSelectedComponent('education')}
            >
              Education Info
            </button>
            <button className="btn btn-danger me-2" onClick={handleClearAll}>
              Clear All
            </button>
            <button
              className="btn btn-primary"
              onClick={handleResetToSampleData}
            >
              Reset to Sample Data
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
