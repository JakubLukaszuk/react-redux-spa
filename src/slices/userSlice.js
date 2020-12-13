import { createSlice } from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    userData: {
        name: "",
        surename: "",
        age: "",
    },
    isUserDateCompelete: false,
    overEighteenYersOld: false
  },
  reducers: {
    setUserData: (state, action) => {
      const {name, surename, age} = action.payload;

      state.userData.name = name;
      state.userData.surename = surename;
      state.userData.age = age;

      if(age >= 18)
       {
          state.overEighteenYersOld = true;
       }

      if(name!= null && surename != null && age != null)
        {
            state.isUserDateCompelete = true;
        }
        else
        {
            state.isUserDateCompelete = false;
        }
    },
  },
});

export const { setUserData } = userInfoSlice.actions;

export const selectUserData = state => state.userInfo.userData;
export const selectIsUserDateCompelete = state => state.userInfo.isUserDateCompelete;
export const selectOverEighteenYersOld = state => state.userInfo.overEighteenYersOld;


export default userInfoSlice.reducer;