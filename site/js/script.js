let myId = document.getElementById("myId");

JsBarcode("#barcode1", 
	myId.innerHTML, 
	{format: "ean8",
	lineColor: "#485e9c",
  	width:4,
  	height: 50,
  	displayValue: false
});