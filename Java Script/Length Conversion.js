/* Functions for length conversion*/
/* Kilometer Convert */ 
function ConvertKm(x){
    document.getElementById("meter").value = (x*1000);
    document.getElementById("centimeter").value = x*100000;
    document.getElementById("millimeter").value = x*1000000;
    document.getElementById("mile").value = (x*0.6213712).toFixed(5);
    document.getElementById("yard").value = (x*1093.613).toFixed(5);
    document.getElementById("foot").value = x*3280.84;
    document.getElementById("inch").value = (x*39370.08).toFixed(5);
    document.getElementById("nauticalmile").value = (x*0.5399568).toFixed(5); 
}
  
/* Meter Convert */
function ConvertM(x){
    document.getElementById("kilometer").value = x*0.001;
    document.getElementById("centimeter").value = x*100;
    document.getElementById("millimeter").value = x*1000;
    document.getElementById("mile").value = (x*0.0006213712).toFixed(5);
    document.getElementById("yard").value = (x*1.093613).toFixed(5);
    document.getElementById("foot").value = (x*3.28084).toFixed(5);
    document.getElementById("inch").value = (x*39.37008).toFixed(5);
    document.getElementById("nauticalmile").value = (x*0.0005399568).toFixed(5); 
}
  
/* Centimeter Conert */
function ConvertCm(x){
    document.getElementById("kilometer").value = (x*0.00001).toFixed(5);
    document.getElementById("meter").value = (x*0.01).toFixed(5);
    document.getElementById("millimeter").value = x*10;
    document.getElementById("mile").value = (x*0.000006213712).toFixed(5);
    document.getElementById("yard").value = (x*0.1093613).toFixed(5);
    document.getElementById("foot").value = (x*0.0328084).toFixed(5);
    document.getElementById("inch").value = (x*0.3937008).toFixed(5);
    document.getElementById("nauticalmile").value = (x*0.000005399568).toFixed(5); 
}
  
/* Millimeter Convert */
function ConvertMm(x){
    document.getElementById("kilometer").value = (x*0.000001).toFixed(6);
    document.getElementById("meter").value = (x*0.1).toFixed(6);
    document.getElementById("centimeter").value = (x*0.001).toFixed(6);
    document.getElementById("mile").value = (x*0.0000006213712).toFixed(13);
    document.getElementById("yard").value = (x*0.001093613).toFixed(13);
    document.getElementById("foot").value = (x*0.00328084).toFixed(13);
    document.getElementById("inch").value = (x*0.03937008).toFixed(13);
    document.getElementById("nauticalmile").value = (x*0.0000005399568).toFixed(13); 
}
  
/*Mile Convert */
function ConvertMi(x){
    document.getElementById("kilometer").value = x*1.609344;
    document.getElementById("meter").value = (x*1609.344).toFixed(5);
    document.getElementById("centimeter").value = x*160934.4;
    document.getElementById("millimeter").value = (x*1609344);
    document.getElementById("yard").value = (x*1760);
    document.getElementById("foot").value = (x*5280);
    document.getElementById("inch").value = (x*63360);
    document.getElementById("nauticalmile").value = (x*0.8689762).toFixed(5); 
}
  
/* Yard Convert */
function ConvertYd(x){
    document.getElementById("kilometer").value = x*0.0009144;
    document.getElementById("meter").value = x*0.9144;
    document.getElementById("centimeter").value = x*91.44;
    document.getElementById("millimeter").value = (x*914.4);
    document.getElementById("mile").value = (x*0.0005681818);
    document.getElementById("foot").value = (x*3);
    document.getElementById("inch").value = (x*36);
    document.getElementById("nauticalmile").value = (x*0.0004937365); 
}
/* Foot Convert */
function ConvertFt(x){
    document.getElementById("kilometer").value = x*0.0003048;
    document.getElementById("meter").value = (x*0.3048);
    document.getElementById("centimeter").value = x*30.48;
    document.getElementById("millimeter").value = x*304.8;
    document.getElementById("mile").value = (x*0.0001893939);
    document.getElementById("yard").value = (x*0.3333333);
    document.getElementById("inch").value = (x*12);
    document.getElementById("nauticalmile").value = (x*0.0001645788); 
}
  
/* Inch Convert */
function ConvertIn(x){
    document.getElementById("kilometer").value = x*0.0000254;
    document.getElementById("meter").value = (x*0.0254);
    document.getElementById("centimeter").value = x*2.54;
    document.getElementById("millimeter").value = x*25.4;
    document.getElementById("mile").value = (x*0.00001578283);
    document.getElementById("yard").value = (x*0.02777778);
    document.getElementById("foot").value = (x*0.08333333);
    document.getElementById("nauticalmile").value = (x*0.0000137149); 
}
  
/* Nautical Mile Convert */
function ConvertNmi(x){
    document.getElementById("kilometer").value = x*1.852;
    document.getElementById("meter").value = (x*1852);
    document.getElementById("centimeter").value = x*185200;
    document.getElementById("millimeter").value = x*1852000;
    document.getElementById("mile").value = (x*1.150779);
    document.getElementById("yard").value = (x*2025.372);
    document.getElementById("foot").value = (x*6076.115);
    document.getElementById("inch").value = (x*72913.39); 
}