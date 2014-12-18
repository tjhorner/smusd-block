var blocked = ["doge2048.com", "agame.com", "maxgames.com"];

var blockedRoutes = [{
  domain: "sites.google.com",
  path: "/site/punblockedgames/",
  allPaths: true
}];

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

function URI(url){
  var el = document.createElement("a");
  el.href = url;
  return el;
}

if(contains(URI(window.location.href).hostname, blocked)){
  window.location = "http://tjhorner.com/smusd-block";
}

$.each(blockedRoutes, function(i,e){
  if(URI(window.location.href).hostname === e.domain){
    if(e.allPaths){
      if(window.location.href.indexOf(e.path) !== -1){
        window.location = "http://tjhorner.com/smusd-block";
      }
    }else{
      if(URI(window.location.href).pathname === e.path){
        window.location = "http://tjhorner.com/smusd-block";
      }
    }
  }
});
