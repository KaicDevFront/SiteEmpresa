window.onload = function () {
	
	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-27.648598, -48.577423),
			scrollwheel:false,
			zoom:12,
			mapTypeId:'roadmap'
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}

	function addMarker(lat,long,icon,content){
		var latlng = {'lat':lat,'lng':long};

		var marker = new google.maps.Marker({
			position:latlng,
			map:map,
			icon:icon
		});

		var InfoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});

		google.maps.event.addListener(marker,'click',function() {
			InfoWindow.open(map,marker);
		})
		
	}

	initialize();

	var conteudo = '<p style="color:black;font-size:10px;padding:10px 0;">Meu endereço</p>';
	addMarker(-27.616637,-48.5923228,'',conteudo);

}