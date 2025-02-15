function UpdateData(x, src)
{
   var txt=hex=dec=bin='';
   var h,d,b;
   var del=document.calcform.del.value;
   var prefix=document.querySelector('#prefix').checked; // checkbox selected or no
   var hexprefix="",binprefix="";
   if( prefix ) { hexprefix="0x"; binprefix="0b"} ;
   for(var i=0; i<x.length; i++)
   {
      h = x[i].toString(16) // base 16 hex;
      d = x[i].toString(10); //  base 10 decimal
      b = x[i].toString(2); // base 2 binary
      if( h.length==1 ) h='0'+h; // 01 02 ...
      if( b.length<8 ) b='0'.repeat(8-b.length)+b; // 00000011
      if( d<256 ) txt += String.fromCharCode(x[i]); // convert integer to char
      hex += hexprefix+h.toUpperCase(); // convert hex & 0a => 0A & 0x or not
      dec += d; // convert yo decimal
      bin += binprefix+b; // convert to binary
      if( i<x.length-1) { // to add space between every element
         hex+=del;
         dec+=del;
         bin+=del;
      }
   }
   if( src!=1 ) document.calcform.txt.value = txt; // convert from ascii to other
   if( src!=2 ) document.calcform.hex.value = hex; // convert from hex to other
   if( src!=3 ) document.calcform.bin.value = bin; // convert from binary to other
   if( src!=4 ) document.calcform.dec.value = dec; // convert from decimal to other
   document.calcform.len.value = x.length;
}

function ConvertASCII()
{
   var x=[];
   var txt = document.calcform.txt.value; // value of ascii from ascii textarea
   if( txt.length==0 ) return;
   for(i=0; i<txt.length; i++)
   {
      x[i] = txt.charCodeAt(i); // convert char to integer
   }
   UpdateData(x,1);
}

function ConvertHex()
{
   var x=[];
   var hex = document.calcform.hex.value; // value of hex from hex textarea
   if( hex.length==0 ) return;
   hex = hex.replace(/0x/gim,""); // remove all 0x if there exist
   hex = hex.toUpperCase();
   hex = hex.match(/[0-9A-Fa-f]{1,2}/g); // cut the value to values of length 2
   // [0-9A-Fa-f] => "digits between 0 to 9 & characters between a to f either upper or lower"
   for(i=0; i<hex.length; i++)
   {
      x[i] = parseInt(hex[i],16); // convert to integer
   }
   UpdateData(x,2);
}
function ConvertBinary()
{
   var x=[];
   var bin = document.calcform.bin.value; // value of bin from bin textarea
   if( bin.length==0 ) return;
   bin = bin.replace(/0b/gim,""); // remove all 0b if there exist
   bin = bin.match(/[0-1]{1,8}/g); // cut the value to values of length 8
   // [0-1] => "digits between 0 to 1"
   if( !bin ) return; // 0 
   for(i=0; i<bin.length; i++)
   {
      x[i] = parseInt(bin[i],2); // convert to integer
   }
   UpdateData(x,3);
}
function ConvertDecimal()
{
   var x=[];
   var dec = document.calcform.dec.value; // value of decimal from decimal textarea
   if( dec.length==0 ) return;
   dec = dec.match(/[0-9]{1,3}/g); // cut the value to values of length 3
   // [0-1] => "digits between 0 to 9"
   if( !dec ) return; // 0
   for(i=0; i<dec.length; i++)
   {
      x[i] = parseInt(dec[i],10); // convert to integer
   }
   UpdateData(x,4);
}