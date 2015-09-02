var sections = document.querySelectorAll("section.featureset");

var platforms = ["browser", "iOS", "Android", "Windows", , "Blackberry", "Cordova", "FirefoxOS", "ChromeApps", "Tizen"];

var html5Platforms = ["Cordova", "FirefoxOS", "ChromeApps", "Tizen"];

// limited to w3c-webmob.github.io origin
var w3cAPIKey = "tc7zb0gxv7kwks0c0o04gkk0s4s8484";

function jsonHandler(res) { return res.json();}

function populate(e) {
  for (var i = 0 ; i < sections.length; i++) {
    var section = sections[i];
    var table = document.createElement("table");
    var features = section.querySelectorAll("[data-featureid]");
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var tbody = document.createElement("tbody");
    var leadCols = ["Feature"];
    (leadCols.concat(platforms)).forEach(function (p) {
       var th = document.createElement("th");
       var icon = document.createElement("img");
       icon.src = "icons/" + p.toLowerCase() + ".png";
       icon.width=50;
       icon.alt = p;
       th.appendChild(icon);
       tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    table.appendChild(tbody);

    section.appendChild(table);
    var key = document.createElement("div");
    key.innerHTML = document.getElementById("key").textContent;
    section.appendChild(key);

    for (var j = 0 ; j < features.length ; j++) {
        var featureid = features[j].dataset["featureid"];
        (function(featureid, table) {
          var featureData;
          fetch("../api_by_features/" + featureid + ".json")
          .then(jsonHandler)
          .then(function(data) {
            var name = Object.keys(data)[0];
            featureData = data;
            if (data[name].browser && data[name].browser.url) {
              console.log(data[name].browser.url);
              if (data[name].browser.url.match(/^http:\/\/www\.w3\.org\/TR\//)) {
                var shortname = data[name].browser.url.slice(21).split('/')[0].split('#')[0];
                return fetch("https://api-test.w3.org/specifications/" + shortname + "/versions/latest?apikey=" + w3cAPIKey, {mode: "cors"}).then(jsonHandler);
              } else {
                console.log("URL for " + name + " does not live in TR: " + data[name].browser.url);
                return null;
              }
            } else {
              return null;
            }
          }).then(function(data) {
            var name = Object.keys(featureData)[0];
            featureData[name].TR = data;
            describeFeature(featureData, table, featureid);
          });
        })(featureid, tbody);
    }
  }
}

function describeFeature(data, table, featureid) {
  console.log(data);
        var name = Object.keys(data)[0];
        var feature = data[name];
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        th.textContent = name;
        var desc = document.createElement("img");
        desc.title = feature.description;
        desc.src = "icons/info.svg"
        desc.width=10;
        th.appendChild(desc);
        tr.appendChild(th);
        platforms.forEach(function (p) {
          var isNative = html5Platforms.indexOf(p) === -1 ;
          var td = document.createElement("td");
          var className;
          var platformFeature = feature[p];
          if (p === "browser") {
            if (feature.TR) {
              var className = "";
              switch(feature.TR.status) {
                case "Recommendation":
                case "Proposed Edited Recommendation":
                case "Proposed Recommendation":
                case "Candidate Recommendation":
                  className = "high";
                  break;
                case "Last Call":
                  className = "medium";
                  break;
                case "Working Draft":
                  className = "low";
                  break;
                case "Group Note":
                case "Note":
                case "Retired":
                  className = "fail";
                  break;
                default:
                  className = "unknown";
              }
            } else {
              if (feature.browser.api) {
                if (feature.browser.status === "standard") {
                  className = "high";
                } else {
                  className = "low";
                }
              } else {
                className = "none";
              }
            }

          } else if (isNative) {
            if (platformFeature == null) {
              className = "unknown";
            } else if (platformFeature.api) {
              className = "native";
            } else {
              className = "none";
            }
          } else {
            if (platformFeature === "browser") {
              className = "browser";
            } else if (platformFeature == null) {
              className = "unknown";
            } else if (platformFeature.api) {
              if (!feature.browser.api) {
                className = "gap";
              } else {
                className = "proprietary";
              }
            } else {
              className = "none";
            }
          }
          td.className = className;
          if (platformFeature != null) {
                var container, icon, extra ;
                if (platformFeature.url) {
                    container = document.createElement("a");
                    container.href = platformFeature.url;
                    icon = "link-external.svg";
                    if (platformFeature.note) {
                        extra = document.createElement("img");
                        extra.src = "icons/info.svg";
                        extra.width = 10;
                        extra.title = platformFeature.note;
                    }

                } else if (platformFeature.api){
                    container = document.createElement("span");
                    icon = "info.svg";
                } else {
                  container = document.createElement("span");
                  icon = "x.svg";
                }
                var img = document.createElement("img");
                if (platformFeature === "browser") {
                  icon = "browser.png";
                  img.alt = "Use normal browser API";
                  container.title = "Use normal browser API";
                } else if (platformFeature.api) {
                  img.alt = platformFeature.api;
                  container.title = platformFeature.api;
                } else {
                  img.alt = "None";
                  container.title = "None";
                }
                img.src = "icons/" + icon;
                img.width = 20;
                container.appendChild(img);
                td.appendChild(container);
                if (extra) {
                  td.appendChild(extra);
                }

            } else {
                td.textContent = "?";
            }
            tr.appendChild(td);
        });
        table.appendChild(tr);
    }

populate();
// clean up
var scripts = document.querySelectorAll("script");
for (var i = 0; i < scripts.length; i++) {
    scripts[i].remove();
}
