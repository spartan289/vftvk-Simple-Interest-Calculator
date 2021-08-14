
function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;

    var complete = p*r*t/100;
  var year = Number(t)+2020
    document.getElementById("result").innerText += `If you deposit ${p},\nat an interest rate of ${r}%.\nYou will recieve an amount of ${complete},\nin the year ${year}`;
}
function updateTextInput(val) {
    document.getElementById('demo').innerText=`${val}%`; 
  }
