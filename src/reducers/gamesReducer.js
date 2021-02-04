//Put all state here
const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

//*ACTION

// {
//   type: "FETCH_GAMES";
// }

// dispatch({type: "FETCH_GAMES"})

//*ACTION CREATOR
// const fetchGames = (userData) => {
//   return {
//     type: "FETCH_GAMES",
//   payload: userData
//   };
// };

// fetchGames();

export default gamesReducer;
