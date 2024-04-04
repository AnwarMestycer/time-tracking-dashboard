// Your code here
var jsonData;
fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Step 2: Parse JSON
  })
  .then((data) => {
    jsonData = data;
    processData(data);
  })
  .catch((error) => {
    console.error("There was a problem fetching or parsing the data:", error);
  });
var dailyData;
var weeklyData;
var monthlyData;

function processData(jsonData) {
  dailyData = jsonData.map((item) => [
    {
      title: item.title,
      times: {
        current: item.timeframes.daily.current,
        previous: item.timeframes.daily.previous,
      },
    },
  ]);
  weeklyData = jsonData.map((item) => [
    {
      title: item.title,
      times: {
        current: item.timeframes.weekly.current,
        previous: item.timeframes.weekly.previous,
      },
    },
  ]);
  monthlyData = jsonData.map((item) => [
    {
      title: item.title,
      times: {
        current: item.timeframes.monthly.current,
        previous: item.timeframes.monthly.previous,
      },
    },
  ]);

  console.log("Daily data", dailyData);
  console.log("weekly data", weeklyData);
  console.log("monthly data", monthlyData);
}

processData(jsonData);

function getDaily(daily) {
  console.log("daily", daily);

  let workCurrent = document.getElementById("workCurrent");
  let workPrevious = document.getElementById("workPrevious");
  /*----------*/
  let playCurrent = document.getElementById("playCurrent");
  let playPrevious = document.getElementById("playPrevious");
  /* --------- */
  let studyCurrent = document.getElementById("studyCurrent");
  let studyPrevious = document.getElementById("studyPrevious");
  /* -------- */
  let exerciceCurrent = document.getElementById("exerciseCurrent");
  let exercicePrevious = document.getElementById("exercicePrevious");
  /* -------- */
  let socialCurrent = document.getElementById("socialCurrent");
  let socialPrevious = document.getElementById("socialPrevious");
  /* -------- */
  let selfCurrent = document.getElementById("selfCurrent");
  let selfPrevious = document.getElementById("selfPrevious");

  /* ----------------------------- */

  workCurrent.innerHTML = `${daily}hrs`;
  workPrevious.innerHTML = `Yesterday - ${10}hrs`;
  /* --------- */

  playCurrent.innerHTML = `${10}hrs`;
  playPrevious.innerHTML = `Yesterday - ${8}hrs`;
  /* --------- */

  studyCurrent.innerHTML = `${4}hrs`;
  studyPrevious.innerHTML = `Yesterday - ${36}hrs`;
  /* --------- */

  exerciceCurrent.innerHTML = `${4}hrs`;
  exercicePrevious.innerHTML = `Yesterday - ${36}hrs`;
  /* --------- */

  socialCurrent.innerHTML = `${4}hrs`;
  socialPrevious.innerHTML = `Yesterday - ${36}hrs`;
  /* --------- */

  selfCurrent.innerHTML = `${4}hrs`;
  selfPrevious.innerHTML = `Yesterday - ${5}hrs`;
}

function getWeekly(weekly) {
  console.log("weekly", weekly);

  let workCurrent = document.getElementById("workCurrent");
  let workPrevious = document.getElementById("workPrevious");
  /*----------*/
  let playCurrent = document.getElementById("playCurrent");
  let playPrevious = document.getElementById("playPrevious");
  /* --------- */
  let studyCurrent = document.getElementById("studyCurrent");
  let studyPrevious = document.getElementById("studyPrevious");
  /* -------- */
  let exerciceCurrent = document.getElementById("exerciseCurrent");
  let exercicePrevious = document.getElementById("exercicePrevious");
  /* -------- */
  let socialCurrent = document.getElementById("socialCurrent");
  let socialPrevious = document.getElementById("socialPrevious");
  /* -------- */
  let selfCurrent = document.getElementById("selfCurrent");
  let selfPrevious = document.getElementById("selfPrevious");

  /* ----------------------------- */

  workCurrent.innerHTML = `${32}hrs`;
  workPrevious.innerHTML = `Last week - ${36}hrs`;
  /* --------- */

  playCurrent.innerHTML = `${10}hrs`;
  playPrevious.innerHTML = `Last week - ${8}hrs`;
  /* --------- */

  studyCurrent.innerHTML = `${4}hrs`;
  studyPrevious.innerHTML = `Last week - ${36}hrs`;
  /* --------- */

  exerciceCurrent.innerHTML = `${4}hrs`;
  exercicePrevious.innerHTML = `Last week - ${36}hrs`;
  /* --------- */

  socialCurrent.innerHTML = `${4}hrs`;
  socialPrevious.innerHTML = `Last week - ${36}hrs`;
  /* --------- */

  selfCurrent.innerHTML = `${4}hrs`;
  selfPrevious.innerHTML = `Last week - ${5}hrs`;
}

function getMonthly(monthlyData) {
  console.log("Monthly", monthlyData);

  let workCurrent = document.getElementById("workCurrent");
  let workPrevious = document.getElementById("workPrevious");
  /*----------*/
  let playCurrent = document.getElementById("playCurrent");
  let playPrevious = document.getElementById("playPrevious");
  /* --------- */
  let studyCurrent = document.getElementById("studyCurrent");
  let studyPrevious = document.getElementById("studyPrevious");
  /* -------- */
  let exerciceCurrent = document.getElementById("exerciseCurrent");
  let exercicePrevious = document.getElementById("exercicePrevious");
  /* -------- */
  let socialCurrent = document.getElementById("socialCurrent");
  let socialPrevious = document.getElementById("socialPrevious");
  /* -------- */
  let selfCurrent = document.getElementById("selfCurrent");
  let selfPrevious = document.getElementById("selfPrevious");

  /* ----------------------------- */

  workCurrent.innerHTML = `${32}hrs`;
  workPrevious.innerHTML = `Last month - ${36}hrs`;
  /* --------- */

  playCurrent.innerHTML = `${10}hrs`;
  playPrevious.innerHTML = `Last month - ${8}hrs`;
  /* --------- */

  studyCurrent.innerHTML = `${4}hrs`;
  studyPrevious.innerHTML = `Last month - ${36}hrs`;
  /* --------- */

  exerciceCurrent.innerHTML = `${4}hrs`;
  exercicePrevious.innerHTML = `Last month - ${36}hrs`;
  /* --------- */

  socialCurrent.innerHTML = `${4}hrs`;
  socialPrevious.innerHTML = `Last month - ${36}hrs`;
  /* --------- */

  selfCurrent.innerHTML = `${4}hrs`;
  selfPrevious.innerHTML = `Last month - ${5}hrs`;
}
