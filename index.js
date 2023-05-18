const initialData = (stateObj) => stateObj;

const baseReducer = (initialState) => {
  return (state, action) => {
    for (let i = 0; i < Object.keys(initialState).length; i++) {
      if (action.type === `SET_${Object.keys(initialState)[i].replace('-','_').toUpperCase()}`) {
        return {
          ...state,
          [Object.keys(initialState)[i]]: action.payload,
        };
      }
    }
    return state;
  };
};

module.exports = { initialData, baseReducer };
