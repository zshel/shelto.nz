function updateNav() {
    window.addEventListener('scroll',function () {
        var anchors = document.getElementsByClassName("anchor");
        var contentSections = document.getElementsByClassName("content-section");
        var scroll = Math.floor(document.documentElement.scrollTop);
        for(var i = 0; i < anchors.length; i++) {
            var anchor = anchors[i];
            var content = contentSections[i];
            var pos = Math.floor(-(document.body.getBoundingClientRect().top - anchor.getBoundingClientRect().top));
            var height = content.getBoundingClientRect().height;
            // console.log(pos + ":" + scroll+":"+(pos + height));
            var tab = document.getElementById(anchor.id + "-tab");
            if(((scroll) >= pos) && (scroll < (pos + height))) {
                tab.className = "nav-tab nav-tab-active";
                // console.log(pos + "-->" + scroll);
            } else {
                tab.className = "nav-tab";
            }
        }
    })
}

function checkMobile() {
    setMobile()
    window.addEventListener('resize', function (ev) {
        setMobile()
    })
}

function setMobile() {
    var div = document.getElementById("mobile-check");
    var main = document.getElementsByClassName("content")[0];
    if(div.style.display == 'none') {
        main.className = "content small-screen";
    } else {
        main.className = "content";
    }
}


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function createElement(text) {
    var parent = document.createElement("div");
    parent.innerHTML = text;
    return parent.childNodes[0];
}


updateNav();
checkMobile();