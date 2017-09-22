(function(){
	var latitud = $('#latitud');
	var longitud = $('#longitud');
	var btnMostrarLugarFavorito = $('#mostrarLugarFavorito');

	var cargarPagina = function() {
		$('.modal').modal();
		latitud.keydown(validarNumeros);
		longitud.keydown(validarNumeros);
		comprobarNavegador();
		btnMostrarLugarFavorito.click(initMap);
	}
	var validarNumeros = function(e){
		if (e.keyCode !== 8 && (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 189 || e.keyCode > 190)){
			e.preventDefault();
		}	
	};
	var comprobarNavegador = function() {
		if ("geolocation" in navigator) {
			// obtenerUbicacion es nuestra primera funcion como parametro
			console.log('si acepta tu navegador el GPS');
			navigator.geolocation.getCurrentPosition(function(error) {
				console.log(error);
			});
		} else {
			alert('Tu navegador no soporta el GPS');
		}
	}
	var initMap = function() {
		// lat y lng solo recibe numeros, por eso la conversion
		var valorLatitud = Number(latitud.val());
		var valorLongitud = Number(longitud.val());
		console.log(typeof valorLatitud);
		console.log( typeof valorLongitud);

        var misCoordenadas = {
	        	// lat: -25.363,
	        	// lng: 131.044
	        	lat: valorLatitud,
	        	lng: valorLongitud
        	};
        var map = new google.maps.Map($('#mapa')[0], {
          zoom: 4,
          center: misCoordenadas
        });
        var marker = new google.maps.Marker({
          position: misCoordenadas,
          map: map
        });
	};

	$(document).ready(cargarPagina);
})();