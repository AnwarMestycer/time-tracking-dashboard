document.addEventListener("DOMContentLoaded", function () {
  var dailyData;
  var weeklyData;
  var monthlyData;

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

  // Fetch data and process it
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse JSON
    })
    .then((data) => {
      processData(data); // Process the fetched data
    })
    .catch((error) => {
      console.error("There was a problem fetching or parsing the data:", error);
    });

  function processData(jsonData) {
    // Process the fetched JSON data
    dailyData = jsonData.map((item) => ({
      title: item.title,
      times: {
        current: item.timeframes.daily.current,
        previous: item.timeframes.daily.previous,
      },
    }));

    weeklyData = jsonData.map((item) => ({
      title: item.title,
      times: {
        current: item.timeframes.weekly.current,
        previous: item.timeframes.weekly.previous,
      },
    }));

    monthlyData = jsonData.map((item) => ({
      title: item.title,
      times: {
        current: item.timeframes.monthly.current,
        previous: item.timeframes.monthly.previous,
      },
    }));
  }

  function getDaily(dailyData) {
    // Define an array of IDs for the current and previous elements
   const ids = ["work", "play", "study", "exercise", "social", "self"];
   // Loop through the monthlyData array
    dailyData.forEach((item, index) => {
      // Get the current and previous times for the current item
      const { current, previous } = item.times;
      console.log(ids[index], item, index);

      // Construct the IDs for the current and previous elements
      const currentId = `${ids[index]}Current`;
      const previousId = `${ids[index]}Previous`;

      // Update the inner HTML for the current and previous elements
      document.getElementById(currentId).innerHTML = `${current}hrs`;
      document.getElementById(
        previousId
      ).innerHTML = `Last month - ${previous}hrs`;
    });
  }

  function getWeekly(weeklyData) {
    // Define an array of IDs for the current and previous elements
    const ids = ["work", "play", "study", "exercise", "social", "self"];

    // Loop through the monthlyData array
    weeklyData.forEach((item, index) => {
      // Get the current and previous times for the current item
      const { current, previous } = item.times;
      console.log(ids[index]);

      // Construct the IDs for the current and previous elements
      const currentId = `${ids[index]}Current`;
      const previousId = `${ids[index]}Previous`;

      // Update the inner HTML for the current and previous elements
      document.getElementById(currentId).innerHTML = `${current}hrs`;
      document.getElementById(
        previousId
      ).innerHTML = `Last month - ${previous}hrs`;
    });
  }

  function getMonthly(monthlyData) {
    // Define an array of IDs for the current and previous elements
    const ids = ["work", "play", "study", "exercise", "social", "self"];

    // Loop through the monthlyData array
    monthlyData.forEach((item, index) => {
      // Get the current and previous times for the current item
      const { current, previous } = item.times;
      console.log(ids[index]);

      // Construct the IDs for the current and previous elements
      const currentId = `${ids[index]}Current`;
      const previousId = `${ids[index]}Previous`;

      // Update the inner HTML for the current and previous elements
      document.getElementById(currentId).innerHTML = `${current}hrs`;
      document.getElementById(
        previousId
      ).innerHTML = `Last month - ${previous}hrs`;
    });
  }

  // Add event listeners to the buttons
  document.getElementById("dailyButton").addEventListener("click", function () {
    getDaily(dailyData);
  });

  document
    .getElementById("weeklyButton")
    .addEventListener("click", function () {
      getWeekly(weeklyData);
    });

  document
    .getElementById("monthlyButton")
    .addEventListener("click", function () {
      getMonthly(monthlyData);
    });
});
