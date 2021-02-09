// Import stylesheets
import "./style.css";

// Write Javascript code!
$("#app").show();

// fetching api data
const apidata = async url => {
  let jsonData;
  try {
    const response = await fetch(url);
    jsonData = await response.json();
  } catch (e) {
    console.error(e);
    $("#api-data").html("Failed to fetch try again !");
  }
  var tableHtml = `<table border=1><tr><td>UserId</td><td>Title</td></tr>`;
  jsonData.map((data, key) => {
    tableHtml += `<tr><td>${data["id"]}</td><td>${data["title"]}</td></tr>`;
  });
  tableHtml += "</table>";
  $("#api-data").html(tableHtml);
};

apidata("https://jsonplaceholder.typicode.com/todos/");
