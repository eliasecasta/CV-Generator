import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../userSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UserEducationInfo = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUserInfo({ [name]: value }));
  };

  const handleDateChange = (date) => {
    dispatch(setUserInfo({ dateOfStudy: date.toISOString() }));
  };

  return (
    <div className="container">
      <h1 className="text-center">User Education Information</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="school" className="form-label">
            School Name
          </label>
          <input
            type="text"
            className="form-control"
            id="school"
            name="school"
            value={user.school}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="titleOfStudy" className="form-label">
            Title of Study
          </label>
          <input
            type="text"
            className="form-control"
            id="titleOfStudy"
            name="titleOfStudy"
            value={user.titleOfStudy}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateOfStudy" className="form-label">
            Date of Study
          </label>
          <DatePicker
            selected={user.dateOfStudy ? new Date(user.dateOfStudy) : null}
            onChange={handleDateChange}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
};

export default UserEducationInfo;
