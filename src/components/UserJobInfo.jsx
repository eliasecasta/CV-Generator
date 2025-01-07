import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../userSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UserJobInfo = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUserInfo({ [name]: value }));
  };

  const handleDateChange = (name, date) => {
    dispatch(setUserInfo({ [name]: date.toISOString() }));
  };

  return (
    <div className="container">
      <h1 className="text-center">User Job Information</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            name="companyName"
            value={user.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="positionTitle" className="form-label">
            Position Title
          </label>
          <input
            type="text"
            className="form-control"
            id="positionTitle"
            name="positionTitle"
            value={user.positionTitle}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mainResponsibilities" className="form-label">
            Main Responsibilities
          </label>
          <textarea
            className="form-control"
            id="mainResponsibilities"
            name="mainResponsibilities"
            value={user.mainResponsibilities}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateFrom" className="form-label">
            Date From
          </label>
          <DatePicker
            selected={user.dateFrom ? new Date(user.dateFrom) : null}
            onChange={(date) => handleDateChange('dateFrom', date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateUntil" className="form-label">
            Date Until
          </label>
          <DatePicker
            selected={user.dateUntil ? new Date(user.dateUntil) : null}
            onChange={(date) => handleDateChange('dateUntil', date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
};

export default UserJobInfo;
