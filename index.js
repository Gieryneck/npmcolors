 var os = require('os');
 var info = require('./modules/OSInfo');

 process.stdin.setEncoding('utf-8');
 /*Bez tego informacje, które przekazujemy do aplikacji będą odczytywane jako dane szesnastkowe 
 (potraktuje wejście jako buffer). Poprawne enkodowanie zapewnia, że program "zrozumie" co do niego
  mówimy (odczyta wartość jako string z kodowaniem UTF-8). W Node.js istnieją obiekty globalne,
 których nie spotkamy w przeglądarce. Jednym z nich jest przykładowo buffer, który jest heksadecymalną
 (szesnastkową) reprezentacją danych.*/



console.log('NODE.JS version:', process.versions.node);


process.stdin.on('readable', function() {
/*Powyższy kod można odczytać w następujący sposób: na zdarzenie (.on) odczytu (readable), masz wykonać funkcję (function...).
*/
	

	var input = process.stdin.read(); // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu

	if(input !== null) {

		var instruction = input.toString().trim(); // trim() pozbywamy się wszystkich białych znaków z przz i za tekstem. Znikają wszystkie spacje, tabulatory, entery - pozostaje sam czysty tekst. 

		switch(instruction) { 

			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;

			case '/sayhello':
				process.stdout.write('hello!\n');
				break;

			case '/getOSInfo':
				info.print();
				break;	

			default:
				process.stderr.write('Wrong instruction!\n');
		}
		
	}
});





				