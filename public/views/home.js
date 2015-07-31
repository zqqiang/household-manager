define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Home = Marionette.ItemView.extend({
		template: JST.HomeTemplate,
		className: 'home-page',
		initialize: function() {
			this.renderer = new THREE.WebGLRenderer();
			this.renderer.setClearColor(0x000000, 1.0);
			this.renderer.setSize(window.innerWidth, window.innerHeight);
			this.renderer.shadowMapEnabled = true;

			this.scene = new THREE.Scene();

			this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
			this.camera.position.x = 15;
			this.camera.position.y = 16;
			this.camera.position.z = 13;
			this.camera.lookAt(this.scene.position);

			var geometry = new THREE.BoxGeometry(6, 4, 6);
			var material = new THREE.MeshLambertMaterial({
				color: "red"
			});
			var cube = new THREE.Mesh(geometry, material);
			this.scene.add(cube);

			var geometry = new THREE.PlaneGeometry(20, 20);
			var planeMaterial = new THREE.MeshLambertMaterial({
				color: 0xcccccc
			});
			var plane = new THREE.Mesh(geometry, planeMaterial);
			plane.rotation.x = -0.5 * Math.PI;
			plane.position.y = -2;
			this.scene.add(plane);

			var spotLight = new THREE.SpotLight(0xffffff);
			spotLight.position.set(10, 20, 20);
			spotLight.castShadow = true;
			this.scene.add(spotLight);
		},
		onShow: function() {
			this.demoCube();
		},
		demoCube: function() {
			$('main[role="main"]').html(this.renderer.domElement);
			this.render();
		},
		render: function() {
			this.renderer.render(this.scene, this.camera);
			requestAnimationFrame(this.render);
		},
		movingCube: function() {

			/**
			 * @author alteredq / http://alteredqualia.com/
			 * @author mr.doob / http://mrdoob.com/
			 */

			var Detector = {

				canvas: !!window.CanvasRenderingContext2D,
				webgl: (function() {
					try {
						var canvas = document.createElement('canvas');
						return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
					} catch (e) {
						return false;
					}
				})(),
				workers: !!window.Worker,
				fileapi: window.File && window.FileReader && window.FileList && window.Blob,

				getWebGLErrorMessage: function() {

					var element = document.createElement('div');
					element.id = 'webgl-error-message';
					element.style.fontFamily = 'monospace';
					element.style.fontSize = '13px';
					element.style.fontWeight = 'normal';
					element.style.textAlign = 'center';
					element.style.background = '#fff';
					element.style.color = '#000';
					element.style.padding = '1.5em';
					element.style.width = '400px';
					element.style.margin = '5em auto 0';

					if (!this.webgl) {

						element.innerHTML = window.WebGLRenderingContext ? [
							'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
							'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
						].join('\n') : [
							'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
							'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
						].join('\n');

					}

					return element;

				},

				addGetWebGLMessage: function(parameters) {

					var parent, id, element;

					parameters = parameters || {};

					parent = parameters.parent !== undefined ? parameters.parent : document.body;
					id = parameters.id !== undefined ? parameters.id : 'oldie';

					element = Detector.getWebGLErrorMessage();
					element.id = id;

					parent.appendChild(element);

				}

			};

			// browserify support
			if (typeof module === 'object') {

				module.exports = Detector;

			}

			if (!Detector.webgl) Detector.addGetWebGLMessage();

			var container;
			var camera, scene, renderer;
			var plane, cube;
			var mouse, raycaster, isShiftDown = false;

			var rollOverMesh, rollOverMaterial;
			var cubeGeo, cubeMaterial;

			var objects = [];

			init();
			render();

			function init() {

				// container = document.createElement('div');
				// document.body.appendChild(container);

				// var info = document.createElement('div');
				// // info.style.position = 'absolute';
				// info.style.top = '10px';
				// info.style.width = '100%';
				// info.style.textAlign = 'center';
				// info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> - voxel painter - webgl<br><strong>click</strong>: add voxel, <strong>shift + click</strong>: remove voxel';
				// container.appendChild(info);

				camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
				camera.position.set(500, 800, 1300);
				camera.lookAt(new THREE.Vector3());

				scene = new THREE.Scene();

				// roll-over helpers

				rollOverGeo = new THREE.BoxGeometry(50, 50, 50);
				rollOverMaterial = new THREE.MeshBasicMaterial({
					color: 0xff0000,
					opacity: 0.5,
					transparent: true
				});
				rollOverMesh = new THREE.Mesh(rollOverGeo, rollOverMaterial);
				scene.add(rollOverMesh);

				// cubes

				cubeGeo = new THREE.BoxGeometry(50, 50, 50);
				cubeMaterial = new THREE.MeshLambertMaterial({
					color: 0xfeb74c,
					shading: THREE.FlatShading,
					map: THREE.ImageUtils.loadTexture("theme/project/img/square-outline-textured.png")
				});

				// grid

				var size = 500,
					step = 50;

				var geometry = new THREE.Geometry();

				for (var i = -size; i <= size; i += step) {

					geometry.vertices.push(new THREE.Vector3(-size, 0, i));
					geometry.vertices.push(new THREE.Vector3(size, 0, i));

					geometry.vertices.push(new THREE.Vector3(i, 0, -size));
					geometry.vertices.push(new THREE.Vector3(i, 0, size));

				}

				var material = new THREE.LineBasicMaterial({
					color: 0x000000,
					opacity: 0.2,
					transparent: true
				});

				var line = new THREE.Line(geometry, material, THREE.LinePieces);
				scene.add(line);

				raycaster = new THREE.Raycaster();
				mouse = new THREE.Vector2();

				var geometry = new THREE.PlaneBufferGeometry(1000, 1000);
				geometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));

				plane = new THREE.Mesh(geometry);
				plane.visible = false;
				scene.add(plane);

				objects.push(plane);

				// Lights

				var ambientLight = new THREE.AmbientLight(0x606060);
				scene.add(ambientLight);

				var directionalLight = new THREE.DirectionalLight(0xffffff);
				directionalLight.position.set(1, 0.75, 0.5).normalize();
				scene.add(directionalLight);

				renderer = new THREE.WebGLRenderer({
					antialias: true
				});
				renderer.setClearColor(0xf0f0f0);
				renderer.setPixelRatio(window.devicePixelRatio);
				renderer.setSize( /*window.innerWidth*/ 800, /*window.innerHeight*/ 660);

				// container.appendChild(renderer.domElement);
				$('div.3d').html(renderer.domElement);

				document.addEventListener('mousemove', onDocumentMouseMove, false);
				document.addEventListener('mousedown', onDocumentMouseDown, false);
				document.addEventListener('keydown', onDocumentKeyDown, false);
				document.addEventListener('keyup', onDocumentKeyUp, false);

				window.addEventListener('resize', onWindowResize, false);

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize(window.innerWidth, window.innerHeight);

			}

			function onDocumentMouseMove(event) {

				event.preventDefault();

				mouse.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);

				raycaster.setFromCamera(mouse, camera);

				var intersects = raycaster.intersectObjects(objects);

				if (intersects.length > 0) {

					var intersect = intersects[0];

					rollOverMesh.position.copy(intersect.point).add(intersect.face.normal);
					rollOverMesh.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);

				}

				render();

			}

			function onDocumentMouseDown(event) {

				event.preventDefault();

				mouse.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);

				raycaster.setFromCamera(mouse, camera);

				var intersects = raycaster.intersectObjects(objects);

				if (intersects.length > 0) {

					var intersect = intersects[0];

					// delete cube

					if (isShiftDown) {

						if (intersect.object != plane) {

							scene.remove(intersect.object);

							objects.splice(objects.indexOf(intersect.object), 1);

						}

						// create cube

					} else {

						var voxel = new THREE.Mesh(cubeGeo, cubeMaterial);
						voxel.position.copy(intersect.point).add(intersect.face.normal);
						voxel.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
						scene.add(voxel);

						objects.push(voxel);

					}

					render();

				}

			}

			function onDocumentKeyDown(event) {

				switch (event.keyCode) {

					case 16:
						isShiftDown = true;
						break;

				}

			}

			function onDocumentKeyUp(event) {

				switch (event.keyCode) {

					case 16:
						isShiftDown = false;
						break;

				}

			}

			function render() {

				renderer.render(scene, camera);

			}
		}
	});
	return Home;
});