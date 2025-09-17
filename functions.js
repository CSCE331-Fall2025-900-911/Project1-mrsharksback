var num = 0; // global variable

function switchStyle() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet()
{
    task1ref = document.getElementById("mainStyleSheet");
   task1ref.getAttribute("href");
    var selectNewStyle;
    if (task1ref.getAttribute("href") == "style.css")
    {
        selectNewStyle = "style2.css";
    }
    else
    {
        selectNewStyle = "style.css";
    }
   
    task1ref.setAttribute("href", selectNewStyle);
    localStorage.setItem("style", selectNewStyle);
}


window.onload = function()
{
    var c1 = localStorage.getItem("style");
    var c2 = document.getElementById("mainStyleSheet");
    c2.setAttribute("href", c1);
}