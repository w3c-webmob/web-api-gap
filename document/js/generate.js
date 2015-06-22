var sections = document.querySelectorAll("section.featureset");

var platforms = ["browser", "iOS", "Android", "Windows 8", "Cordova", "FirefoxOS", "ChromeApps", "Tizen", "Blackerry"];

for (var i = 0 ; i < sections.length; i++) {
    var section = sections[i];
    var table = document.createElement("table");
    var features = section.querySelectorAll("[data-featureid]");
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var leadCols = ["Feature", "Description"];
    (leadCols.concat(platforms)).forEach(function (p) {
       var th = document.createElement("th");
       th.appendChild(document.createTextNode(p));
       tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    section.appendChild(table);

    for (var j = 0 ; j < features.length ; j++) {
        var featureid = features[j].dataset["featureid"];
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "../api_by_features/" + featureid + ".json");
        xhr.onload = describeFeature(xhr, table, featureid);
        xhr.send();
    }
}

function describeFeature(xhr, table, featureid) {
    return function() {
        try {
	    var data = JSON.parse(xhr.responseText);
        } catch (e) {
            console.error("Failed to parse " + featureid + ".json: " + xhr.responseText + "(" + e + ")");
        }
        var name = Object.keys(data)[0];
        var feature = data[name];
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        th.textContent = name;
        tr.appendChild(th);
        var tdDesc = document.createElement("td");
        tdDesc.textContent = feature.description;
        tr.appendChild(tdDesc);
        platforms.forEach(function (p) {
            var td = document.createElement("td");
            var platformFeature = feature[p];
            if (platformFeature && platformFeature.api) {
                td.classList.add("high");
                var container ;
                if (platformFeature.url) {
                    container = document.createElement("a");
                    container.href = platformFeature.url;
                    td.appendChild(container);
                } else {
                    container = td;
                }
                container.textContent = platformFeature.api
                if (platformFeature.notes) {
                    var p = document.createElement("p");
                    p.textContent = platformFeature.notes;
                    td.appendChild(p);
                }
            } else if (platformFeature == "browser") {
                td.classList.add("high");
                td.textContent = "Browser API";

            } else {
                td.classList.add("low");
                td.textContent = "N/A";
            }
            tr.appendChild(td);
        });
        table.appendChild(tr);
    };
}

// clean up
var scripts = document.querySelectorAll("script");
for (var i = 0; i < scripts.length; i++) {
    scripts[i].remove();
}
