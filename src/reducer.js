export const initialState = {
  user: null,
  profileData: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "PROFILE_DATA":
      return {
        ...state,
        profileData: action.profileData,
      };
    default:
      return state;
  }
};

export default reducer;
