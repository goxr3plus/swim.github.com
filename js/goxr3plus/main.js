function findLatestReleaseURL() {
  //Get the version info from github
  $.getJSON("https://api.github.com/repos/goxr3plus/XR3Player/releases/latest").done(function(json) {
    //console.log(json);
    var version = json.tag_name;
    //console.log(version);
    var date = json.published_at;
    //console.log(date.substring(0,10));
    var downloadURL = "https://github.com/goxr3plus/XR3Player/releases/download/" + version + "/XR3Player_Installer.exe";

    $("#version").html(version + " ("+date.substring(0,10)+")");
    $(".downloadXR3Player").attr("href", downloadURL);
    $("#versionHeader").html("<strong>Installers for (XR3Player " + version + ")</strong>");
  //  console.log("Version : " + version + " Download URL : " + downloadURL);
  });


}

function reverse(str){
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--){
    reversed += str[i];
  }
  return reversed;
}
