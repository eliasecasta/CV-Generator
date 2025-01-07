import UserGeneralInfo from './UserGeneralInfo';
import UserPreview from './UserPreview';

const MainLayout = () => {
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-md-5">
          <UserGeneralInfo />
          {/* Add other input components here */}
        </div>
        <div className="col-md-5">
          <UserPreview />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
