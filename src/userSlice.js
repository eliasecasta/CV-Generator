import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: '',
  companyName: '',
  positionTitle: '',
  mainResponsibilities: '',
  dateFrom: '',
  dateUntil: '',
  school: '',
  titleOfStudy: '',
  dateOfStudy: '',
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