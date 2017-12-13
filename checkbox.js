// JavaScript Document

function sprawdz1() {

  var liczba = document.getElementById("Light").checked == true; // sprawdza czy pole chceckboxa jest tru czy false -->
  // document.write(liczba);	 -->		<!-- wyświetla tekst zawarty w zmiennej liczba -->

  if (liczba == true) document.getElementById("wynik1").innerHTML = "Lights: true"; // jeśli true to wytświetl true w <div o nazwie wynik -->
  else document.getElementById("wynik1").innerHTML = "Lights: false";


}

function sprawdz2() {


  var liczba = document.getElementById("AC").checked == true; // sprawdza czy pole chceckboxa jest tru czy false -->
  // document.write(liczba);	 -->		// wyświetla tekst zawarty w zmiennej liczba -->

  if (liczba == true) document.getElementById("wynik2").innerHTML = "AC: true"; // jeśli true to wytświetl true w <div o nazwie wynik -->
  else document.getElementById("wynik2").innerHTML = "AC: false";
}

function sprawdz3() {

  var textTrue = "&lt;Section Name=&quot;Devices&quot; Visible=&quot;True&quot; Order=&quot;3&quot;&gt;";
  var textFalse = "&lt;Section Name=&quot;Devices&quot; Visible=&quot;False&quot; Order=&quot;3&quot;&gt;";

  var liczba = document.getElementById("Div").checked == true; // sprawdza czy pole chceckboxa jest tru czy false -->
  // document.write(liczba);	 -->		<!-- wyświetla tekst zawarty w zmiennej liczba -->

  if (liczba == true) document.getElementById("wynik3").innerHTML = textTrue; // jeśli true to wytświetl true w <div o nazwie wynik -->
  else document.getElementById("wynik3").innerHTML = textFalse;
}

function sprawdz4() {

  var check1 = document.getElementById("Diater").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  var check2 = document.getElementById("Light").checked == true;
  var check3 = document.getElementById("Annell").checked == true;
  var check4 = document.getElementById("Chroma").checked == true;
  var check5 = document.getElementById("ACBms").checked == true;
  var check6 = document.getElementById("AC").checked == true;
  var check7 = document.getElementById("Stol").checked == true;
  var check8 = document.getElementById("Drzwi").checked == true;
  var check9 = document.getElementById("Okna").checked == true;
  var check10 = document.getElementById("Status").checked == true;



  if (check1 == true) document.getElementById("Div").checked = true;
  else if (check2 == true) document.getElementById("Div").checked = true;
  else if (check3 == true) document.getElementById("Div").checked = true;
  else if (check4 == true) document.getElementById("Div").checked = true;
  else if (check5 == true) document.getElementById("Div").checked = true;
  else if (check6 == true) document.getElementById("Div").checked = true;
  else if (check7 == true) document.getElementById("Div").checked = true;
  else if (check8 == true) document.getElementById("Div").checked = true;
  else if (check9 == true) document.getElementById("Div").checked = true;
  else if (check10 == true) document.getElementById("Div").checked = true;
  else document.getElementById("Div").checked = false;

  if (check3 == true) document.getElementById("checkboxAnnelll").checked = true;
  else document.getElementById("checkboxAnnelll").checked = false;

  if (check8 == true) document.getElementById("parametersDoor1").checked = true;
  else document.getElementById("parametersDoor1").checked = false;

  if (check6 == true) document.getElementById("checkboxBlockAC").checked = true;
  else document.getElementById("checkboxBlockAC").checked = false;
}

function sprawdz5() {

  document.getElementById("wynik4").innerHTML = DiatT;
}

function sprawdz6() {

  var jezyk = document.getElementById("Lang").value; // sprawdza czy pole chceckboxa jest true czy false -->
  var jezykKod;

  if (jezyk == "PL") document.getElementById("wynik4").innerHTML = LangPL;
  else if (jezyk == "EN") document.getElementById("wynik4").innerHTML = LangEN;
  else document.getElementById("wynik4").innerHTML = LangSV;


  //document.getElementById("wynik4").innerHTML = jezykKod;


}

function sprawdz7() {

  var check1 = document.getElementById("checkboxMonit").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  var check2 = document.getElementById("checkboxBmsMonit").checked == true;
  var check3 = document.getElementById("checkboxALVOGases").checked == true;
  var check4 = document.getElementById("checkboxWebGases").checked == true;

  if ((check2 || check3 || check4) == true) document.getElementById("checkboxMonit").checked = true;
  else document.getElementById("checkboxMonit").checked = false;

  if (check3 == true) document.getElementById("checkboxALVOGasess").checked = true;
  else document.getElementById("checkboxALVOGasess").checked = false;

}

function sprawdz8() {

  var check1 = document.getElementById("checkboxVideo").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  var check2 = document.getElementById("checkboxCamControll").checked == true;
  var check3 = document.getElementById("checkboxNecMonitor").checked == true;
  var check4 = document.getElementById("checkboxHuawei").checked == true;
  var check5 = document.getElementById("checkboxBarco").checked == true;
  var check6 = document.getElementById("checkboxBlockVideo").checked == true;
  

if (check2 == true) document.getElementById("AddresVideo").style.visibility = "visible";
  else document.getElementById("AddresVideo").style.visibility = "hidden";
  
 

  if ((check2 || check3 || check4 || check5 || check6) == true) document.getElementById("checkboxVideo").checked = true;
  else document.getElementById("checkboxVideo").checked = false;
  
  
  
}

function sprawdz9() {

  var check1 = document.getElementById("checkboxMedia").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  var check2 = document.getElementById("checkboxVoiceNote").checked == true;
  var check3 = document.getElementById("checkboxBarcoAudio").checked == true;
  var check4 = document.getElementById("checkboxMp3").checked == true;
  


  if ((check2 || check3 || check4) == true) document.getElementById("checkboxMedia").checked = true;
  else document.getElementById("checkboxMedia").checked = false;
  
   
}

function sprawdz10() {

  let check1 = document.getElementById("checkboxChromaviso").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check2 = document.getElementById("checkboxRoom").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check3 = document.getElementById("checkboxAnnelll").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check4 = document.getElementById("checkboxSimeon").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check5 = document.getElementById("checkboxMach").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check6 = document.getElementById("checkboxSola").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check7 = document.getElementById("checkboxSola2").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check8 = document.getElementById("checkboxAlvo").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check9 = document.getElementById("checkboxPolaris").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check10 = document.getElementById("checkboxPolarisP600").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check11 = document.getElementById("checkboxTrilux").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check12 = document.getElementById("checkboxTrumph").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check13 = document.getElementById("checkboxLedLight").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check14 = document.getElementById("checkboxKLSMartin").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check15 = document.getElementById("checkboxDoor1").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check16 = document.getElementById("checkboxDoor2").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check17 = document.getElementById("checkboxDoor3").checked == true; // sprawdza czy pole chceckboxa jest true czy false -->
  let check18 = document.getElementById("checkboxALVOTableEtiuda").checked == true;
  let check19 = document.getElementById("checkboxALVOTableSerenada").checked == true;
let check20 = document.getElementById("checkboxALVOTableRapsodia").checked == true;
let check21 = document.getElementById("checkboxBlockAC").checked == true;
let check22 = document.getElementById("checkboxBlockVideo").checked == true;
let check23 = document.getElementById("checkboxCamControll").checked == true;


  if (check1 == true) document.getElementById("ChromavisoAddress").style.visibility = "visible";
  else document.getElementById("ChromavisoAddress").style.visibility = "hidden";

  if (check2 == true) document.getElementById("RoomAddress").style.visibility = "visible";
  else document.getElementById("RoomAddress").style.visibility = "hidden";

  if (check3 == true) document.getElementById("AnnelllAddress").style.visibility = "visible";
  else document.getElementById("AnnelllAddress").style.visibility = "hidden";

  if (check4 == true) document.getElementById("SimeonAddress").style.visibility = "visible";
  else document.getElementById("SimeonAddress").style.visibility = "hidden";

  if (check5 == true) document.getElementById("MachAddress").style.visibility = "visible";
  else document.getElementById("MachAddress").style.visibility = "hidden";

  if (check6 == true) document.getElementById("SolaAddress").style.visibility = "visible";
  else document.getElementById("SolaAddress").style.visibility = "hidden";

  if (check7 == true) document.getElementById("Sola2Address").style.visibility = "visible";
  else document.getElementById("Sola2Address").style.visibility = "hidden";

  if (check8 == true) document.getElementById("AlvoAddress").style.visibility = "visible";
  else document.getElementById("AlvoAddress").style.visibility = "hidden";

  if (check9 == true) document.getElementById("PolarisAddress").style.visibility = "visible";
  else document.getElementById("PolarisAddress").style.visibility = "hidden";

  if (check10 == true) document.getElementById("PolarisP600Address").style.visibility = "visible";
  else document.getElementById("PolarisP600Address").style.visibility = "hidden";

  if (check11 == true) document.getElementById("TriluxAddress").style.visibility = "visible";
  else document.getElementById("TriluxAddress").style.visibility = "hidden";

  if (check12 == true) document.getElementById("TrumphAddress").style.visibility = "visible";
  else document.getElementById("TrumphAddress").style.visibility = "hidden";

  if (check13 == true) document.getElementById("LedLightAddress").style.visibility = "visible";
  else document.getElementById("LedLightAddress").style.visibility = "hidden";

  if (check14 == true) document.getElementById("KLSMartinAddress").style.visibility = "visible";
  else document.getElementById("KLSMartinAddress").style.visibility = "hidden";

  if (check15 == true) document.getElementById("parametersDoor1").style.visibility = "visible";
  else document.getElementById("parametersDoor1").style.visibility = "hidden";

  if (check16 == true) document.getElementById("parametersDoor2").style.visibility = "visible";
  else document.getElementById("parametersDoor2").style.visibility = "hidden";

  if (check17 == true) document.getElementById("parametersDoor3").style.visibility = "visible";
  else document.getElementById("parametersDoor3").style.visibility = "hidden";

  if (check18 == true) document.getElementById("ALVOTableAddressEtiuda").style.visibility = "visible";
  else document.getElementById("ALVOTableAddressEtiuda").style.visibility = "hidden";
  if (check19 == true) document.getElementById("ALVOTableAddressSerenada").style.visibility = "visible";
  else document.getElementById("ALVOTableAddressSerenada").style.visibility = "hidden";
  if (check20 == true) document.getElementById("ALVOTableAddressRapsodia").style.visibility = "visible";
  else document.getElementById("ALVOTableAddressRapsodia").style.visibility = "hidden";

  if (check21 == true) document.getElementById("AddressAC").style.visibility = "visible";
  else document.getElementById("AddressAC").style.visibility = "hidden";
  
 if ((check22  || check23) == true) document.getElementById("AddresVideo").style.visibility = "visible";
  else document.getElementById("AddresVideo").style.visibility = "hidden";
  

}


function zmienne(){

//let LangPL = '<IntegraUISettings Lang=\"pl\" Keyboard =\"pl\" Default=\"True\">';
//let LangEN = '<IntegraUISettings Lang=\"en\" Keyboard =\"en\" Default=\"True\">';
//let LangSV = '<IntegraUISettings Lang=\"sv\" Keyboard =\"sv\" Default=\"True\">';


//let EnergyTrue ='<Section  Name="Energy" Visible="True"  Order="1"  >';
//let EnergyFalse ='<Section  Name="Energy" Visible="False"  Order="1"  >';

//let ElectricityTrue ='<Category Name="Electricity"Label="SalaA" Visible="True"  Order="3" />';
//let ElectricityFalse ='<Category Name="Electricity"Label="SalaA" Visible="False"  Order="3" />';

//let GasesTrue = '<Category Name="Gases"Device="True" Visible="True"  Order="1"  >';
//let GasesFalse = '<Category Name="Gases"Device="True" Visible="True"  Order="1"  >';

let labelO2 = document.getElementById("labelO2ALVOGasess").value;
let labelO2false = (document.getElementById("labelO2ALVOGasess").value) > "";
let O2 ='<Option Name="O2"  Label="'+ labelO2 + '"  Visible="'+ labelO2false +'" />';

alert(O2);

} 

