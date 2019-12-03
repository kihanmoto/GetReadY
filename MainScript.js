function PublishOpticonQR()
{
  var QRClass = document.getElementById("QR");

  if(QRClass == null)
  {
    alert("NonId");
  }
  QRClass.style.backgroundImage = "url('http://chart.apis.google.com/chart?cht=qr&choe=Shift_JIS&chs=160x160&chld=h&chl=%40MENU_OPTO%40ZZ" + GetFormText("Command") + "%40ZZ%40OTPO_UNEM%40')";

}

function GetFormText(id)
{
  return document.getElementById(id).value;
}
