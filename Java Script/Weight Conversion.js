/* Functions for weight conversion*/
/* Metric Tons Convert */ 
function ConvertTon(x) {
    document.getElementById("kg").value	 = x * 1000;
    document.getElementById("g").value	 = x * (10 ** 6);
    document.getElementById("mg").value	 = x * (10 ** 9);
    document.getElementById("mcg").value = x * (10 ** 12);
    document.getElementById("st").value	 = x * 1000 * 0.1574;
    document.getElementById("lb").value	 = x / 0.00045359237;
    document.getElementById("oz").value	 = x * 1000 * 35.274;
}

/* Kilograms Convert */ 
function ConvertKg(x) {
    document.getElementById("ton").value = x / 1000;
    document.getElementById("g").value	 = x * 1000;
    document.getElementById("mg").value	 = x * (10 ** 6);
    document.getElementById("mcg").value = x * (10 ** 9);
    document.getElementById("st").value	 = x * 0.1574;
    document.getElementById("lb").value	 = x * 2.2046;
    document.getElementById("oz").value	 = x * 35.274;
}

/* Grams Convert */ 
function ConvertGr(x) {
    document.getElementById("ton").value = x / (1000 ** 2);
    document.getElementById("kg").value  = x / 1000;
    document.getElementById("mg").value	 = x * 1000;
    document.getElementById("mcg").value = x * (10 ** 6);
    document.getElementById("st").value	 = x * 0.00015747;
    document.getElementById("lb").value	 = x * 0.0022046;
    document.getElementById("oz").value	 = x * 0.035274;
}

/* Milligrams Convert */ 
function ConvertMg(x) {
    document.getElementById("ton").value = x / (10 ** 9);
    document.getElementById("kg").value	 = x / (10 ** 6);
    document.getElementById("g").value	 = x / 1000;
    document.getElementById("mcg").value = x * 1000;
    document.getElementById("st").value	 = x / 1000 * 0.00015747;
    document.getElementById("lb").value	 = x / 1000 * 0.0022046;
    document.getElementById("oz").value	 = x / 1000 * 0.035274;
}

/* Micrograms Convert */ 
function ConvertMcg(x) {
    document.getElementById("ton").value = x / (10 ** 12);
    document.getElementById("kg").value	 = x / (10 ** 9);
    document.getElementById("g").value	 = x / (10 ** 6);
    document.getElementById("mg").value	 = x / 1000;
    document.getElementById("st").value	 = x / (10 ** 6) * 0.00015747;
    document.getElementById("lb").value	 = x / (10 ** 6) * 0.0022046;;
    document.getElementById("oz").value	 = x / (10 ** 6) * 0.035274;
}

/* Stones Convert */ 
function ConvertSt(x) {
    document.getElementById("ton").value = x / 0.15747 / 1000;
    document.getElementById("kg").value	 = x / 0.15747;
    document.getElementById("g").value	 = x / 0.00015747;
    document.getElementById("mg").value	 = x / 0.00015747 * 1000;
    document.getElementById("mcg").value = x / 0.00015747 * (10 ** 6);
    document.getElementById("lb").value	 = x * 14;
    document.getElementById("oz").value	 = x * 224;
}

/* Pounds Convert */ 
function ConvertLb(x) {
    document.getElementById("ton").value = x * 0.00045359237;
    document.getElementById("kg").value  = x / 2.2046;
    document.getElementById("g").value	 = x / 0.0022046;
    document.getElementById("mg").value	 = x / 0.0022046 * 1000;
    document.getElementById("mcg").value = x / 0.0022046 * (10 ** 6);
    document.getElementById("st").value	 = x * 0.071429;
    document.getElementById("oz").value	 = x * 16;
}

/* Ounces Convert */ 
function ConvertOz(x) {
    document.getElementById("ton").value = x / 35.274 / 1000;
    document.getElementById("kg").value  = x / 35.274;
    document.getElementById("g").value	 = x / 0.035274;
    document.getElementById("mg").value	 = x / 0.035274 * 1000;
    document.getElementById("mcg").value = x / 0.035274 * (10 ** 6);
    document.getElementById("st").value	 = x * 0.0044643;
    document.getElementById("lb").value	 = x * 0.0625;
}