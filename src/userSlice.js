import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  companyName: 'Example Corp',
  positionTitle: 'Software Engineer',
  mainResponsibilities: 'Developing and maintaining web applications',
  dateFrom: '2020-01-01T00:00:00.000Z',
  dateUntil: '2022-01-01T00:00:00.000Z',
  school: 'Example University',
  titleOfStudy: 'Bachelor of Science in Computer Science',
  dateOfStudy: '2015-01-01T00:00:00.000Z',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
