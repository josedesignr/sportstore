(function(){
	$(document).ready(function(){
		/*Puedo hacer una función sin nombre y declararle sus funcionalidades adentro,
		por ejemplo, aquí mi función le agrega la clase isActive, pero mi función no tiene nombre, es directa.*/
		$('.botonMenu').on('click', function(){
			$('.contenido-left').toggleClass("isActive");
		})
		//Media queries en Javascript
		//Si la pantalla tiene máximo 768px (o menos)
		if(window.matchMedia('(max-width:768px)').matches){
			//selecciono todo elbody como zona sensible de acción
			var $body = document.querySelector('body');
			//creo una varable body que implemente Hammer (gestos)
        	var body = new Hammer($body);
        	//función que agrega la clase ,isActive
	        var add_isActive = function(){
	        	$('.contenido-left').addClass("isActive");
	        }
	        //función que quita la clase .isActive
	        var remove_isActive = function(){
	        	$('.contenido-left').removeClass("isActive");
	        }
	        //Si en todo body hago un gesto de swiperight, llame a la función  add_isActive
	        body.on('swiperight', add_isActive);
	        //Si en todo body hago un gesto de swipeleft, llame a la función  remove_isActive
	        body.on('swipeleft', remove_isActive);
		} 
	});
	

	var app = angular.module('tiendaDeportiva', [ ]);

//CONTROLADORES
//Este controlador maneja la parte de las camisetas
	app.controller("ControladorTienda", function(){
		this.productos = camisetas;
	});

//Este controlador maneja la parte de las camisetas
	app.controller("ControladorFotos", function(){
		this.foto = 0;
		this.fotoActual = function(valor){
			this.foto = valor || 0; 
		};
	});

//Este controlador maneja el panel de información adicional de las camisetas
	app.controller("ControladorInformacion", function(){
		//Inicializo la pestaña con valor de 1 (Pestaña 'Descripción')
		this.tab = 1;
		//Creo una función que recibe como parámetro un valor (desde el HTML)
		this.selectTab = function(setTab){
			//Que la pestaña actual ya no sea 1 sino el valor que venga desde 'setTab'
			this.tab = setTab;
		};
		//Creo una funcióm que recibe como parámetro un valor (desde el HTML)
		this.isSelected = function(checkTab){
			//Aquí no asigno valores sino que los comparo, si el retorno de this.tab es igual a lo que llegó desde el HTML, el resultado es 'true'
			return this.tab === checkTab;
		};
	});

	var camisetas = [{
		nombre: "Adidas Real Madrid #10",
		precio: 84.95,
		descripcion: "ClimaLite Jersey: James Rodríguez",
		puedeComprar: true,
		agotado: false,
		imagenes: [
				'img/realmadrid_james-full.jpg',
				'img/chelsea_cuadrado-full.jpg',
				'img/manunited_falcao-full.jpg'
			]
		},
		{ 
		nombre: "Adidas Chelsea FC #23",
		precio: 76.95,
		descripcion: "ClimaCool Jersey: Juan G. Cuadrado",
		puedeComprar: true,
		agotado: false,
		imagenes: [
				//full: 'img/chelsea_cuadrado-full.jpg',
				'img/chelsea_cuadrado-full.jpg',
				'img/realmadrid_james-full.jpg',
				'img/manunited_falcao-full.jpg'
			]
		}, 
		{
		nombre: "Nike Manchester United #9",
		precio: 69.95,
		descripcion: "DRI-FIT Jersey: Radamel Falcao",
		puedeComprar: true,
		agotado: false,
		imagenes: [
				//full: 'img/manunited_falcao-full.jpg',
				'img/manunited_falcao-full.jpg',
				'img/realmadrid_james-full.jpg',
				'img/chelsea_cuadrado-full.jpg'
			]
		}
	];



	//--CONTROLADOR EQUIPOS

	//Controlador general que contiene las gemas (productos)
	app.controller("TableController", function(){
		this.teams = listaRandom;

		this.selectOrder = function(order){
			if (order === 0){
				this.teams = listaRandom;
			}
			//Que el orden actual ya no sea Random sino el valor que venga desde el HTML
			if (order === 1){
				var listaPorPuntos = [];
				for(var i=0; i<20; i++){
					ordenarPorPuntos(listaRandom, listaPorPuntos);
				}
				this.teams = listaPorPuntos;
			}
			if (order === 2){
				var listaPorEstrellas = [];
				for(var i=0; i<20; i++){
					ordenarPorEstrellas(listaRandom, listaPorEstrellas);
				}
				this.teams = listaPorEstrellas;
			}
		};
	});

	//-----------------------------------------------------
	//EQUIPOS DEL FPC : ORDEN RANDOM POR DEFECTO

	var listaRandom = [
	//---------------DEPORTIVO CALI
	{
		name: 'Deportivo Cali',
		ID: 1,
		stars: 8,
		points: 28,
		jugados: 16,
		golesFavor: 30,
		golesContra: 21,
		difGol: 9,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: ["1965", "1967", "1969", "1970", "1974", "1996", "1998", "2005-II"]
	},
	//---------------SANTA FE
	{
		name: 'Santa Fe',
		ID: 2,
		stars: 8,
		points: 27,
		jugados: 16,
		golesFavor: 25,
		golesContra: 14,
		difGol: 11,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: ["1948", "1958", "1960", "1966", "1971", "1975", "2012-I", "2014-II"]
	},
		//---------------MILLONARIOS
	{
		name: 'Millonarios',
		ID: 3,
		stars: 8,
		points: 26,
		jugados: 16,
		golesFavor: 30,
		golesContra: 21,
		difGol: 9,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: ["1949", "1951", "1952", "1953", "1959", "1961", "1962", "1963", "1964", "1972", "1978", "1987", "1988", "2012-II"]
	},
		//---------------NACIONAL
	{
		name: 'Nacional',
		ID: 4,
		stars: 8,
		points: 26,
		jugados: 16,
		golesFavor: 28,
		golesContra: 20,
		difGol: 8,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: ["1954", "1973", "1976", "1981", "1991", "1994", "1999", "2005-I", "2007-I", "2007-II", "2011-I", "2013-I", "2013-II", "2014-I"]
	},
		//---------------MEDELLÍN
	{
		name: 'Medellín',
		ID: 5,
		stars: 8,
		points: 31,
		jugados: 16,
		golesFavor: 25,
		golesContra: 15,
		difGol: 10,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: ["1955", "1957", "2002-II", "2004-I", "2009-II"]
	},
		//---------------ONCE CALDAS
	{
		name: 'Once Caldas',
		ID: 6,
		stars: 8,
		points: 19,
		jugados: 16,
		golesFavor: 21,
		golesContra: 23,
		difGol: -2,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: ["1950", "2003-I", "2009-I", "2010-II"]
	},
		//---------------TOLIMA
	{
		name: 'Tolima',
		ID: 7,
		stars: 8,
		points: 23,
		jugados: 16,
		golesFavor: 20,
		golesContra: 15,
		difGol: 5,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: ["2003-II"]
	},
		//---------------JUNIOR
	{
		name: 'Junior',
		ID: 8,
		stars: 8,
		points: 26,
		jugados: 16,
		golesFavor: 22,
		golesContra: 13,
		difGol: 9,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: ["1977", "1980", "1993", "1995", "2004-II", "2010-I", "2011-II"]
	},
		//---------------PASTO
	{
		name: 'Pasto',
		ID: 9,
		stars: 8,
		points: 6,
		jugados: 16,
		golesFavor: 8,
		golesContra: 33,
		difGol: -25,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: ["2006-I"]
	},
		//---------------CÚCUTA
	{
		name: 'Cúcuta',
		ID: 10,
		stars: 8,
		points: 11,
		jugados: 16,
		golesFavor: 11,
		golesContra: 26,
		difGol: -15,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: ["2006-II"]
	},
		//---------------HUILA
	{
		name: 'Huila',
		ID: 11,
		stars: 8,
		points: 29,
		jugados: 16,
		golesFavor: 25,
		golesContra: 20,
		difGol: 5,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: []
	},
		//---------------ÁGUILAS
	{
		name: 'Águilas',
		ID: 12,
		stars: 8,
		points: 21,
		jugados: 16,
		golesFavor: 13,
		golesContra: 13,
		difGol: 0,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: []
	},
		//---------------EQUIDAD
	{
		name: 'La Equidad',
		ID: 13,
		stars: 8,
		points: 13,
		jugados: 16,
		golesFavor: 13,
		golesContra: 19,
		difGol: -6,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: []
	},
		//---------------PATRIOTAS
	{
		name: 'Patriotas',
		ID: 14,
		stars: 8,
		points: 23,
		jugados: 16,
		golesFavor: 14,
		golesContra: 14,
		difGol: 0,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: []
	},
		//---------------ALIANZA PETROLERA
	{
		name: 'Alianza',
		ID: 15,
		stars: 8,
		points: 16,
		jugados: 16,
		golesFavor: 13,
		golesContra: 17,
		difGol: -4,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: []
	},
		//---------------CHICÓ
	{
		name: 'Chicó',
		ID: 16,
		stars: 8,
		points: 14,
		jugados: 16,
		golesFavor: 14,
		golesContra: 21,
		difGol: -7,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: ["2008-I"]
	},
		//---------------ENVIGADO
	{
		name: 'Envigado',
		ID: 17,
		stars: 8,
		points: 31,
		jugados: 16,
		golesFavor: 20,
		golesContra: 11,
		difGol: 9,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: []
	},
		//---------------CORTULUÁ
	{
		name: 'Cortuluá',
		ID: 18,
		stars: 8,
		points: 20,
		jugados: 16,
		golesFavor: 19,
		golesContra: 19,
		difGol: 0,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: []
	},
		//---------------JAGUARES CÓRDOBA
	{
		name: 'Jaguares',
		ID: 19,
		stars: 8,
		points: 18,
		jugados: 16,
		golesFavor: 18,
		golesContra: 22,
		difGol: -4,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: []
	},
		//---------------UNIAUTÓNOMA
	{
		name: 'Uniautónoma',
		ID:20,
		stars: 8,
		points: 14,
		jugados: 16,
		golesFavor: 10,
		golesContra: 22,
		difGol: -12,
		images: [
				{
					full: 'img/gem-07.gif',
					thumb: 'img/gem-07.gif'
				}
		],
		titulosLiga: []
	}
	]; //---Fin de Arreglo Equipos: Orden Random

	

//-------------FUNCIONES PARA REORDENAR EQUIPOS

	var ordenarPorPuntos = function(equipos, listaOrdenados){

		var mayorPuntajeTmp = 0;
		var ganadorTmp = 0;
		
		for (var i=0; i<equipos.length; i++){
			//Si la lista no tiene a nadie con quién comparar, simplemente haga loop hasta que encuentre el que más puntos tenga y sálgase
			if (listaOrdenados.length ===0){
				if(equipos[i].points > mayorPuntajeTmp){
					mayorPuntajeTmp = equipos[i].points;
					ganadorTmp = i;
				}
			//De lo contrario, si ya hay equipos en la lista ordenada, entre aquí...	
			}else{
				var equiposValidados =  0; //Porque aún no ha validado ninguno
				
				//Recorra la lista de los ordenados
				for(var j=0; j<listaOrdenados.length; j++){
					//Compare el nombre del equipo[i] con todos los de la lista de ordenados, y si el nombre es distinto, entre.
					if (equipos[i].name !== listaOrdenados[j].name){
						//Sume uno a la la cantidad de equipos validados
						equiposValidados++;
						//Si el total de equipos validados es igual los ordenados, es porque ninguno tenía el mismo nombre...
						if(equiposValidados === listaOrdenados.length){
							//Todo lo que entre aquí es porque aún no está en la lista ordenada
							equiposValidados = 0;
							
							//--FILTRO COMPARATIVO 1: PUNTOS
							if(equipos[i].points > mayorPuntajeTmp){
								mayorPuntajeTmp = equipos[i].points;
								ganadorTmp = i;
							}
							//--Si aparte de todos estos anteriores filtros, tienen el mismo puntaje, entre aquí
							else if(equipos[i].points === mayorPuntajeTmp){
								
								//--FILTRO COMPARATIVO 2: DIFERENCIA DE GOL
								//--Si el equipo que está siendo evaluado tiene mayor difGol que el que estaba como ganador, ya el nuevo ganador es i; sino, no entre y siga como venía.
								if (equipos[i].difGol > equipos[ganadorTmp].difGol){
									ganadorTmp = i;
								}
								//--Si aparte de todos estos anteriores filtros, tienen la misma diferencia de gol, entre aquí.
								else if (equipos[i].difGol === equipos[ganadorTmp].difGol){
									
									//--FILTRO COMPARATIVO 3: GOLES A FAVOR
									if (equipos[i].golesFavor > equipos[ganadorTmp].golesFavor){
										alert("Hubo un empate nivel 2: DifGol, entre "+equipos[i].name+" y "+equipos[ganadorTmp].name+". Pero por cantidad de goles a favor, gana "+equipos[i].name);
										ganadorTmp = i;

									}else{
										alert("Hubo un empate nivel 2: DifGol, entre "+equipos[i].name+" y "+equipos[ganadorTmp].name+". Pero por cantidad de goles a favor, gana "+equipos[ganadorTmp].name);
									}
								}
							}
						}
					}
				}
			}//---Fin de ELSE
		} //---Fin de FOR principal
		listaOrdenados.push(equipos[ganadorTmp]);
		console.log(equipos[ganadorTmp].name);
		ganadorTmp = 0;
		console.log(listaOrdenados.length);
	};

	var ordenarPorEstrellas = function(equipos, listaOrdenados){
		var mayorPuntajeTmp = 0;
		var ganadorTmp = 0;

		for (var i=0; i<equipos.length; i++){
			//Si la lista no tiene a nadie con quién comparar, simplemente haga loop hasta que encuentre el que más títulos tenga y sálgase
			if (listaOrdenados.length ===0){
				if(equipos[i].titulosLiga.length > mayorPuntajeTmp){
					mayorPuntajeTmp = equipos[i].titulosLiga.length;
					ganadorTmp = i;
				}
			//De lo contrario, si ya hay equipos en la lista ordenada, entre aquí...
			}else{
				var equiposValidados =  0; //Porque aún no ha validado ninguno
				
				//Recorra la lista de los ordenados
				for(var j=0; j<listaOrdenados.length; j++){
					//Compare el nombre del equipo[i] con todos los de la lista de ordenados, y si el nombre es distinto, entre.
					if (equipos[i].name !== listaOrdenados[j].name){
						//Sume uno a la la cantidad de equipos validados
						equiposValidados++;
						//Si el total de equipos validados es igual los ordenados, es porque ninguno tenía el mismo nombre...
						if(equiposValidados === listaOrdenados.length){
							//Todo lo que entre aquí es porque aún no está en la lista ordenada
							equiposValidados = 0;
							
							//--FILTRO COMPARATIVO 1: PUNTOS
							if(equipos[i].titulosLiga.length >= mayorPuntajeTmp){
								mayorPuntajeTmp = equipos[i].titulosLiga.length;
								ganadorTmp = i;
							}
						}
					}
				}
			}
		}
		listaOrdenados.push(equipos[ganadorTmp]);
		console.log(equipos[ganadorTmp].name);
		console.log(equipos[ganadorTmp].titulosLiga.length);
		ganadorTmp = 0;
		//console.log(listaOrdenados.length);
	};

})();
