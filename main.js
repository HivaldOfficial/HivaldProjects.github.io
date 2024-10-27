new Morris.Line({
  // ID of the element in which to draw the chart.
  element: "myfirstchart",
  lineColors: ["orange"],
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: "2015", value: 20 },
    { year: "2016", value: 10 },
    { year: "2017", value: 25 },
    { year: "2018", value: 5 },
    { year: "2019", value: 30 },
    { year: "2020", value: 20 },
    { year: "2021", value: 40 },
  ],
  // The name of the data record attribute that contains x-values.
  xkey: "year",
  // A list of names of data record attributes that contain y-values.
  ykeys: ["value"],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ["Value"],
});

Morris.Donut({
  element: "donut-example",
  data: [
    { label: "Download Sales", value: 12 },
    { label: "In-Store Sales", value: 30 },
    { label: "Mail-Order Sales", value: 20 },
  ],
  colors: ["orange", "#1abd35", "#f42a26"],
  labelColor: "#ffffff",
});
