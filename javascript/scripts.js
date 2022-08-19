const data = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
];

document. addEventListener('DOMContentLoaded', selectToday());

function selectToday() {
  var day = "";
  var todayBackgroud = "";
  switch (new Date().getDay()) {
    case 0:
      day = "sun";
      break;
    case 1:
      day = "son";
      break;
    case 2:
       day = "tue";
      break;
    case 3:
      day = "wed";
      break;
    case 4:
      day = "thu";
      break;
    case 5:
      day = "fri";
      break;
    case 6:
      day = "sat";
      break;
  }
  todayBackground = document.getElementById(day).style.backgroundColor = "#83692e";
}

function formCharts() {
  var dataLength = data.length;
  var days = document.querySelectorAll("p.day");
  var charts = document.querySelectorAll("div.chart");
  for (var i = 0; i < dataLength; i++) {
    if(data[i]["day"] == days[i].innerHTML) {
      charts[i].style.height =  data[i]["amount"] + "%";
    }
  }
}
formCharts();

var headingBalance = document.getElementById("h-balance");
headingBalance.innerHTML = "$" + 921.48;

var footerBalance = document.getElementById("f-balance");

footerBalance.innerHTML = "$" + 478.33;

var increaseRate = document.getElementById("p-increase");
increaseRate.innerHTML = 2.4 + "%";

function showAmount(detail) {
  var chartHeight = detail.offsetHeight;
  var parentElement = detail.parentNode;
  var chartDetailsOffset = 0;
  var addDiv = document.createElement("div");
  addDiv.classList.add("chart-details");
  var chartDetailsOffset = chartHeight + 10;
  var addDivOffSet = chartDetailsOffset + 'px';
  addDiv.style.bottom = addDivOffSet;
  parentElement.appendChild(addDiv);
  displayChartDetails();
}

function displayChartDetails() {
  var paragraph = document.createElement("p");
  paragraph.classList.add("white-para");
  var dataLength = data.length;
  var days = document.querySelectorAll("p.day");
  var chartDetails = document.querySelector("div.chart-details");
  for (var i = 0; i < dataLength; i++) {
    if(data[i]["day"] == days[i].innerHTML) {
      paragraph.innerHTML = "$" + data[i]["amount"];
      chartDetails.appendChild(paragraph);
    }
  }
}

function removeChartDetials(detail) {
  var chartDetail = detail;
  var parentElement = chartDetail.parentNode;
  var removedChild = document.querySelector("div.chart-details");
  parentElement.removeChild(removedChild);
}