$.ajax({
    url: "https://data.montgomerycountymd.gov/resource/icn6-v9z3.json?$where=starts_with(crimename2, 'Theft')",
    type: "GET",
    data: {
      "$$app_token" : "EyjkM1cbY29V2jp54rG3CnXMP"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});