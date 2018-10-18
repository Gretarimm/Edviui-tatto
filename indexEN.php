<?php include 'head.php';?>

<body>
	<header>
		<nav>
			<ul id="ulfirst">
				<li><a class="btnfirst" href="#second">ARTISTS</a></li>
				<li><a class="btnfirst" href="#third">GALLERY</a></li>
				<li><a class="btnfirst" href="#forth">CONTACT</a></li>
				<ul id="ulsecond">
					<li><a class="btnsecond" href="index.php">Lt</a></li>
					<li><a class="btnsecond activesecond" href="indexEN.php">En</a></li>
					<li><a class="btnsecond" href="indexRu.php">Ru</a></li>
				</ul>
			</ul>
		</nav>
	</header>

	<section id="first">
		<div class="wrapper">
			<img class="bck" src="img/10.jpg">
		</div>
	</section>

	<section id="second">
		<div class="wrapper">
			<h1>ARTISTS</h1>
			<div class="row">
				<div class="col-sm-4">
					<img src="img/2.jpg">
					<h2>MANTAS JEZUS</h2>
					<p>5m. work experience</p>
				</div>
				<div class="col-sm-4">
					<img src="img/2.jpg">
					<h2>MANTAS JEZUS</h2>
					<p>5m.work experience</p>
				</div>
				<div class="col-sm-4">
					<img src="img/2.jpg">
					<h2>MANTAS JEZUS</h2>
					<p>5m. work experience</p>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-6">
					<img src="img/5.jpg">
					<h2>KLEOPATRA PATRA</h2>
					<p>5m. work experience</p>
				</div>
				<div class="col-sm-6">
					<img src="img/5.jpg">
					<h2>KLEOPATRA PATRA</h2>
					<p>5m. work experience</p>
				</div>
			</div>
		</div>		
	</section>

	<section id="third">
		<div class="wrapper">
			<h1>GALLERY</h1>
			<a href="#third" id="myBtn">
				<img src="img/8.jpg">
			</a>
			<div id="myModal" class="modal">
				<div class="modal-content">
					<span class="close">&times;</span>
					<div id="myBtnContainer">
					  <button class="btn active" onclick="filterSelection('all')"> Show all</button>
					  <button class="btn" onclick="filterSelection('3D')">3D</button>
					  <button class="btn" onclick="filterSelection('animals')"> Animals</button>
					  <button class="btn" onclick="filterSelection('mix')"> Mix</button>
					</div>
					<div class="row">
						<div class="column 3D animals">
						    <div class="content">
						    	<img src="img/3d/3d1.jpg" alt="butterflay">
						    </div>
						</div>
						<div class="column 3D">
						    <div class="content">
						    	<img src="img/3d/3d2.jpg" alt="butterflay">
						    </div>
						</div>
						<div class="column 3D animals">
						    <div class="content">
						    	<img src="img/3d/3d3.jpg" alt="butterflay">
						    </div>
						</div>
						<div class="column 3D">
							<div class="content">
								<img src="img/3d/3d4.jpg" alt="butterflay">
							</div>
						</div>
						<div class="column 3D">
							<div class="content">
								<img src="img/3d/3d5.jpg" alt="butterflay">
							</div>
						</div>
						<div class="column 3D">
							<div class="content">
								<img src="img/3d/3d6.jpg" alt="butterflay">
							</div>
						</div>
						<div class="column 3D">
							<div class="content">
								<img src="img/3d/3d7.jpg" alt="butterflay">
							</div>
						</div>
						<div class="column 3D animals">
							<div class="content">
								<img src="img/3d/3d8.jpg" alt="butterflay">
							</div>
						</div>
						<div class="column 3D animals">
							<div class="content">
								<img src="img/3d/3d9.jpg" alt="butterflay">
							</div>
						</div>
						<div class="column 3D">
							<div class="content">
								<img src="img/3d/3d10.jpg" alt="butterflay">
							</div>
						</div>
						<div class="column 3D">
							<div class="content">
								<img src="img/3d/3d11.jpg" alt="butterflay">
							</div>
						</div>
						<div class="column 3D animals">
							<div class="content">
								<img src="img/3d/3d12.jpg" alt="butterflay">
							</div>
						</div>
						<div class="column 3D mix">
							<div class="content">
								<img src="img/3d/3d13.jpg" alt="butterflay">
							</div>
						</div>
						<div class="column 3D">
							<div class="content">
								<img src="img/3d/3d14.jpg" alt="butterflay">
							</div>
						</div>
						<div class="column 3D">
							<div class="content">
								<img src="img/3d/3d15.jpg" alt="butterflay">
							</div>
						</div>
						<div class="column 3D animals">
							<div class="content">
								<img src="img/3d/3d16.jpg" alt="butterflay">
							</div>
						</div>
						<div class="column 3D">
							<div class="content">
								<img src="img/3d/3d17.jpg" alt="butterflay">
							</div>
						</div>
						<div class="column 3D animals">
							<div class="content">
								<img src="img/3d/3d18.jpg" alt="butterflay">
							</div>
						</div>
						<div class="column animals">
							<div class="content">
								<img src="img/3.jpg" alt="Mountains">
							</div>
						</div>
						<div class="column animals">
							<div class="content">
								<img src="img/9.jpg" alt="Mountains">
							</div>
						</div>
						<div class="column animals">
							<div class="content">
								<img src="img/11.jpg" alt="Mountains">
							</div>
						</div>
						<div class="column animals">
							<div class="content">
								<img src="img/12.jpg" alt="Mountains">
							</div>
						</div>
						<div class="column animals">
							<div class="content">
								<img src="img/13.jpg" alt="Mountains">
							</div>
						</div>
						<div class="column animals">
							<div class="content">
								<img src="img/14.jpg" alt="Mountains">
							</div>
						</div>
						<div class="column animals">
							<div class="content">
								<img src="img/15.jpg" alt="Mountains">
							</div>
						</div>
						<div class="column mix">
							<div class="content">
								<img src="img/16.jpg" alt="Mountains">
							</div>
						</div>
						<div class="column mix">
							<div class="content">
								<img src="img/17.jpg" alt="Mountains">
							</div>
						</div>
						<div class="column animals">
							<div class="content">
								<img src="img/18.jpg" alt="Mountains">
							</div>
						</div>
						<div class="column animals">
							<div class="content">
								<img src="img/19.jpg" alt="Mountains">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="forth">
		<div class="wrapper">
			<div class="contact">
				<div class="mob">
					<h6>CONTACT US</h6>
					<p>Mob.: +370 6222558</p>
					<h6>ADDRESS</h6>
					<p>Lazdynu g. 45, Klaipeda</p>
				</div>
				<div class="fiw">
					<h6>FOLOING US</h6>
					<div>
						<a href="#"><img src="img/facebook.png"></a>
						<a href="#"><img src="img/instagram.png"></a>
						<a href="#"><img src="img/twiter.png"></a>
					</div>
				</div>				
			</div>
			<div id="map"></div>
			<script>
			function myMap() {
			  var myCenter = new google.maps.LatLng(51.508742,-0.120850);
			  var mapCanvas = document.getElementById("map");
			  var mapOptions = {center: myCenter, zoom: 5};
			  var map = new google.maps.Map(mapCanvas, mapOptions);
			  var marker = new google.maps.Marker({position:myCenter});
			  marker.setMap(map);

			  // Zoom to 9 when clicking on marker
			  google.maps.event.addListener(marker,'click',function() {
			    map.setZoom(9);
			    map.setCenter(marker.getPosition());
			  });
			}
			</script>
			<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU&callback=myMap"></script>
		</div>		
	</section>

	<footer>
		<div class="wrapper">
			<div>
				<div><p>&#169; 2018 MAZYLIO PSD template by <span>Laaqiq</span></p></div>
			</div>
		</div>
	</footer>

	<script src="main.js"></script>
</body>