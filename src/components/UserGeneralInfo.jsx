import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../userSlice';

const UserGeneralInfo = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const formattedPhone = formatPhone(value);
      dispatch(setUserInfo({ ...user, [name]: formattedPhone }));
    } else if (name === 'email') {
      if (validateEmail(value)) {
        setEmailError('');
      } else {
        setEmailError('Invalid email address');
      }
      dispatch(setUserInfo({ ...user, [name]: value }));
    } else {
      dispatch(setUserInfo({ ...user, [name]: value }));
    }
  };

  const formatPhone = (value) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    // Limit to 10 digits
    const limitedDigits = digits.slice(0, 10);
    // Format as 123-456-7890
    const formattedPhone = limitedDigits.replace(
      /(\d{3})(\d{3})(\d{4})/,
      '$1-$2-$3',
    );
    return formattedPhone;
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="container">
      <h1 className="text-center">User General Information</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          {emailError && <div className="text-danger">{emailError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default UserGeneralInfo;
