var jsonInd;
$(function() {
  $.getJSON("/jsonworld", function(b) {
    var e = 0;
    $.each(b.countries_stat, function(b, d) {
      $("<tr><td>" + d.country_name + "</td><td>" + d.cases + "</td><td>" + d.total_recovered + "</td><td>" + d.deaths + "</td></tr>").appendTo("#userdata tbody");
      e++
    });
    $(".a").text(b.world_total.total_cases);
    $(".b").text(b.world_total.total_recovered);
    $(".c").text(b.world_total.total_deaths);
    $(".d").text(b.world_total.new_cases);
    $(".e").text(e - 3);
    $(".f").text(b.world_total.new_deaths)
  });
  $.getJSON("/jsonindia", function(b) {
    jsonInd = b;
    var e = b.total_values.confirmed,
      f = b.total_values.recovered,
      d = b.total_values.deaths;
    $(".x").text(e);
    $(".y").text(f);
    $(".z").text(d);
    $.each(b.state_wise, function(b, d) {
      $("<tr class='here' id=" + d.statecode + "><td >" + d.state + "</td><td>" + d.confirmed + "</td><td>" + d.recovered + "</td><td>" + d.deaths + "</td></tr>").appendTo("#indiadata tbody")
    })
  })
});
$(document).ready(function() {
  $(document).on("click", ".here", function(a) {
    var b = this.id;
    $(".slot").slideUp();
    setTimeout(function() {
      $(".contain").empty();
      $.each(jsonInd.state_wise, function(a, c) {
        b == c.statecode && ($(".slotText").text(c.state), $.each(c.district, function(a, b) {
          $("<div class = 'col-4'>" + a + "<p class='text-warning'>Cases: " + b.confirmed + "</p></div>").appendTo("#toAdd")
        }))
      });
      $(".slot").slideDown()
    }, 500)
  });
  var b = [],
    e = [],
    f = [],
    d = [],
    g = [],
    x = [],
    z = [],
    A = [],
    l, m, n;
  $.getJSON("https://covidapi.info/api/v1/global/count",
    function(a) {
      var y = 0;
      $.each(a.result, function(a, c) {
        0 < y && (x.push(c.confirmed - l), z.push(c.deaths - m), A.push(c.recovered - n), g.push(a.substring(5)));
        b.push(a.substring(5));
        l = c.confirmed;
        e.push(l);
        m = c.deaths;
        f.push(m);
        n = c.recovered;
        d.push(n);
        y++
      })
    });
  $(".charts").hide();
  var p = 0;
  $(".visuals").on("click", function() {
    if (0 == p) {
      $(".charts").show();
      p = 1;
      Chart.defaults.global.defaultFontColor = "white";
      var a = document.getElementById("myCaseChart").getContext("2d");
      new Chart(a, {
        type: "line",
        data: {
          labels: b,
          datasets: [{
            label: "Number of Cases",
            data: e,
            backgroundColor: "rgba(240, 173, 78,0.5)",
            borderColor: "rgba(240, 173, 78,1)",
            borderWidth: 1,
            borderDash: [5, 5]
          }]
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: !0
              }
            }]
          }
        }
      });
      a = document.getElementById("myDeathChart").getContext("2d");
      new Chart(a, {
        type: "line",
        data: {
          labels: b,
          datasets: [{
            label: "Number of Deaths",
            data: f,
            backgroundColor: "rgba(217, 83, 79, 0.5)",
            borderColor: "rgba(217, 83, 79,1)",
            borderWidth: 1,
            borderDash: [5, 5]
          }]
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: !0
              }
            }]
          }
        }
      });
      a = document.getElementById("myRecoverChart").getContext("2d");
      new Chart(a, {
        type: "line",
        data: {
          labels: b,
          datasets: [{
            label: "Number of Recoveries",
            data: d,
            backgroundColor: "rgba(92, 184, 92,0.5)",
            borderColor: "rgba(92, 184, 92,1)",
            borderWidth: 1,
            borderDash: [5, 5]
          }]
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: !0
              }
            }]
          }
        }
      });
      a = document.getElementById("myNewCaseChart").getContext("2d");
      new Chart(a, {
        type: "bar",
        data: {
          labels: g,
          datasets: [{
            label: "Number of New Cases per day",
            data: x,
            backgroundColor: "rgba(240, 173, 78,0.5)",
            borderColor: "rgba(240, 173, 78,1)",
            borderWidth: 1,
            borderDash: [5, 5]
          }]
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: !0
              }
            }]
          }
        }
      });
      a = document.getElementById("myNewDeathChart").getContext("2d");
      new Chart(a, {
        type: "bar",
        data: {
          labels: g,
          datasets: [{
            label: "Number of New Deaths per day",
            data: z,
            backgroundColor: "rgba(217, 83, 79,0.5)",
            borderColor: "rgba(217, 83, 79,1)",
            borderWidth: 1,
            borderDash: [5, 5]
          }]
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: !0
              }
            }]
          }
        }
      });
      a = document.getElementById("myNewRecoverChart").getContext("2d");
      new Chart(a, {
        type: "bar",
        data: {
          labels: g,
          datasets: [{
            label: "Number of New Recoveries per day",
            data: A,
            backgroundColor: "rgba(92, 184, 92,0.5)",
            borderColor: "rgba(92, 184, 92,1)",
            borderWidth: 1,
            borderDash: [5, 5]
          }]
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: !0
              }
            }]
          }
        }
      })
    } else p = 0, $(".charts").hide()
  });
  var B = [],
    C = [],
    q = [],
    D = [],
    E = [],
    r = [],
    h = [],
    k = [],
    t, u, v;
  $.getJSON("https://covidapi.info/api/v1/country/IND",
    function(a) {
      var b = 0;
      $.each(a.result, function(a, c) {
        23 == c.recovered && (c.deaths = 6);
        0 < b && (D.push(c.confirmed - t), E.push(c.deaths - u), r.push(c.recovered - v), h.push(a.substring(5)));
        k.push(a.substring(5));
        t = c.confirmed;
        u = c.deaths;
        v = c.recovered;
        b++;
        B.push(t);
        C.push(u);
        q.push(v)
      })
    });
  $(".chartsIndia").hide();
  var w = 0;
  $(".visualsIndia").on("click", function() {
    if (0 == w) {
      $(".chartsIndia").show();
      w = 1;
      Chart.defaults.global.defaultFontColor = "white";
      var a = document.getElementById("indiaCaseChart").getContext("2d");
      new Chart(a, {
        type: "line",
        data: {
          labels: k,
          datasets: [{
            label: "Number of Cases",
            data: B,
            backgroundColor: "rgba(240, 173, 78,0.5)",
            borderColor: "rgba(240, 173, 78,1)",
            borderWidth: 1,
            borderDash: [5, 5]
          }]
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: !0
              }
            }]
          }
        }
      });
      a = document.getElementById("indiaDeathChart").getContext("2d");
      new Chart(a, {
        type: "line",
        data: {
          labels: k,
          datasets: [{
            label: "Number of Deaths",
            data: C,
            backgroundColor: "rgba(217, 83, 79, 0.5)",
            borderColor: "rgba(217, 83, 79,1)",
            borderWidth: 1,
            borderDash: [5, 5]
          }]
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: !0
              }
            }]
          }
        }
      });
      a = document.getElementById("indiaRecoverChart").getContext("2d");
      new Chart(a, {
        type: "line",
        data: {
          labels: k,
          datasets: [{
            label: "Number of Recoveries",
            data: q,
            backgroundColor: "rgba(92, 184, 92,0.5)",
            borderColor: "rgba(92, 184, 92,1)",
            borderWidth: 1,
            borderDash: [5, 5]
          }]
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: !0
              }
            }]
          }
        }
      });
      a = document.getElementById("indiaNewCaseChart").getContext("2d");
      new Chart(a, {
        type: "bar",
        data: {
          labels: h,
          datasets: [{
            label: "Number of New Cases per day",
            data: D,
            backgroundColor: "rgba(240, 173, 78,0.5)",
            borderColor: "rgba(240, 173, 78,1)",
            borderWidth: 1,
            borderDash: [5, 5]
          }]
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: !0
              }
            }]
          }
        }
      });
      a = document.getElementById("indiaNewDeathChart").getContext("2d");
      new Chart(a, {
        type: "bar",
        data: {
          labels: h,
          datasets: [{
            label: "Number of New Deaths per day",
            data: E,
            backgroundColor: "rgba(217, 83, 79,0.5)",
            borderColor: "rgba(217, 83, 79,1)",
            borderWidth: 1,
            borderDash: [5, 5]
          }]
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: !0
              }
            }]
          }
        }
      });
      a = document.getElementById("indiaNewRecoverChart").getContext("2d");
      new Chart(a, {
        type: "bar",
        data: {
          labels: h,
          datasets: [{
            label: "Number of New Recoveries per day",
            data: r,
            backgroundColor: "rgba(92, 184, 92,0.5)",
            borderColor: "rgba(92, 184, 92,1)",
            borderWidth: 1,
            borderDash: [5, 5]
          }]
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: !0
              }
            }]
          }
        }
      })
    } else w = 0, $(".chartsIndia").hide()
  })
});
