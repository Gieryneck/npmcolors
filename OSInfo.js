
var os = require('os');
var colors = require('colors');
var time = require('./modules/translateTime'); // do modułu importujemy inny moduł 'translateTime'




function getOSInfo() {
				
	var type = os.type();

	if(type === 'Darwin') {

		type = 'OSX';

	} else if(type === 'Windows_NT') {

		type = 'Windows';
	}

	var release = os.release();
	var cpu = os.cpus()[0].model; // metoda cpus() zwraca tablicę ze wszystkimi rdzeniami cpu, my chcemy tylko model
	var uptime = os.uptime(); //podawany w sec
	var userInfo = os.userInfo();

	time.timeDisplay(uptime); // tu korzystamy z modułu translateTime



	console.log('System:'.green, type);
	console.log('Release:'.rainbow, release);
	console.log('CPU model:'.underline.red, cpu);
	console.log('Uptime: ~'.cyan, (uptime/60).toFixed(0), 'minutes.'); // toFixed(0) zaokr. do 0 miejsc po przecinku
	console.log('User name:'.yellow, userInfo.username);
	console.log('Home dir:'.yellow, userInfo.homedir);
	
	/*
	process.stdout a console.log. Nie są to funkcje, 
	które działają tak samo. Różnią się tym, że 
	console.log zawsze stawia na końcu znak nowej linii (\n). 
	*/

}


exports.print = getOSInfo; 
//eksportujemy fcję getOSInfo() jako metodę print obiektu exports, możemy potem z printa [ == getOSInfo() ] korzystać w programie po imporcie modułu OSInfo do skryptu programu

