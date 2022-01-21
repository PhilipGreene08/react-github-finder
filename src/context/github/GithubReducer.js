const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, users: action.payload, loading: false };
    case 'PAPAYA':
      return `yes`;
    default:
      return state;
  }
};

export default githubReducer;
