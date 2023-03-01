let a = Number(prompt("Enter row/column to print hollow equTriangle"));

for(i=1; i<=a; i++){
    for(k=1; k<=a-i; k++){
	     document.write("&nbsp");
	}
    for(j=1; j<=i; j++){
	    	if(j==1||j==i||i==1||i==a){
		   document.write("*" + " ");
		}
		else{
		document.write("&nbsp&nbsp&nbsp");
	}
}
	document.write("<br>");
}