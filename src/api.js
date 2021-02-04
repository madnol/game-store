//Base URL
const base_url = "http://api.rawg.io/api/";

//Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth();

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Getting the day
const getCurrentDay = () => {
  const day = new Date().getDate();

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Getting day/month/year
const getCurrentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${getCurrentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${getCurrentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${getCurrentYear + 1}-${currentMonth}-${currentDay}`;
console.log(currentDate);

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
