export const reducer = (state, action) => {
  switch (action.type) {
    case "response_data":
      return {
        ...state,
        regions: Object.keys(action.payload),
        changeRegions: action.payload,
      };
    case "setDistrict":
      return {
        ...state,
        district: state.changeRegions[action.payload],
      };
  }
};
