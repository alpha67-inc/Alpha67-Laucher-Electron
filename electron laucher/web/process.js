

eel.expose(returnInfo);
function returnInfo(){
    var select = document.getElementById('motor');
    var value = select.options[select.selectedIndex].value;
    var e = document.getElementById("versiong");
    var strUser = e.options[e.selectedIndex].text;
    const info = [value, strUser]
    return info;
}

function first ()
{
  var cont = document.getElementById("test");
  x.style.display = "block";
}

eel.expose(js_random);
function js_random() {
  return Math.random();
}

async function start()
{
  await getPercentValue()
  await run()
}

async function getPercentValue()
{ 
  var element = document.getElementById("progressBar");   
  var text = document.getElementById("re"); 
  var cont = document.getElementById("test"); 
  var width = 1;
  var identity = setInterval(scene, 100);

  async function scene() {
    width = await eel.read()();
    width = width.toFixed(1);
    console.log(width);

    if (width >= 1000) {
      clearInterval(identity);
      cont.style.display = "none";
      //alert("finish")
    } 

    else {
      cont.style.display = "block";
      element.style.width = width + '%'; 
      text.innerHTML = width + "%";
    
    }
  }


  }




async function run() {
  //var elem = document.getElementById("progressBar");
  //var width = eel.updateBar()
  //elem.style.width = width + "%";
  //elem.innerHTML = width  + "%";
    //window.open('https://github.com', '_blank', 'top=500,left=200,frame=false,nodeIntegration=no')
  eel.StartMinecraft();

    

          /*(function(settings){
            var version = settings;
              })*/
}

async function connection() {
  window.localStorage.removeItem('invalid');
  window.location.href = "connection/connection.html";
}

eel.expose
function updatePrgressBar(){
  var elem = document.getElementById("progressBar");

}



eel.sendVersions()(function(settings){
    var version = settings;
    var select = document.getElementById("versiong"); 
  
  
    
    // Optional: Clear all existing options first:
    select.innerHTML = "";

    // Populate list with options:
    for(var i = 0; i < version.length; i++) {
        var opt = version[i];
        select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
    }
      });
