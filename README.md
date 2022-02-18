<h1 align="center">IES El Rincón tour</h1>
<p align="center">
  <img src="https://user-images.githubusercontent.com/77303061/154721634-630956f2-1dda-4544-8dd2-3000aa4b8df2.png" width="350px"
			 height="200px"/>
</p>
<!-- ![download](https://user-images.githubusercontent.com/77303061/154721634-630956f2-1dda-4544-8dd2-3000aa4b8df2.png) -->

<h2>Index</h2>

* [Description](#description)
* [Minimun system requirements](#minimun-system-requirements)
* [Technology used](#technology-used)
* [Installation manual](#installation-manual)
* [Backend](#backend)
  * [Data model](#data-model)
	  * [Entity-Relation diagram](#entity-relation-diagram)
	  * [Relational diagram](#relational-diagram)
  * [Use cases](#use-cases)
* [Frontend](#frontend)
  * [How it works](#how-it-works)
  * [Usability](#usability) 
* [Conclusion](#conclusion)
* [Links and references](#links-and-references)

<h2>Description</h2>
This application was made to create a virtual experience with some things from the Manos Unidas web page. So the idea is to be able to see it with virtual glasses but due to compatibility problems with my laptop I designed so everyone could play it only with a laptop or a pc without needing virtual glasses.
When we enter the app we can see a room with two doors, one of them leads to the cinema where we can sit down and see and hear people like in a real cinema, watch the different clips, also you can pause/play them and turn off the screen. And the other room has a store with objects that you can buy and add it to your buy list if you login in the settings.

<h2>Minimun system requirements</h2>

* INTEGRATED CPU VRAM: 1400 MB</p>
* DEDICATED VIDEO RAM: 2 GB</p>
* OS: Mac OSX, Windows 10 64-bit</p>

<h2>Technology used</h2>
<img width="180" alt="unity" src="https://user-images.githubusercontent.com/77303061/146060764-70a810a6-ecdc-4886-9147-4902364e73cb.png">
<p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.</p>

<img width="100" alt="unity" src="https://user-images.githubusercontent.com/77303061/146060326-2f732539-98e6-45fa-b322-33a1e1cf2124.png">
<p>Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Inc.'s Worldwide Developers Conference as a Mac OS X-exclusive game engine. The engine has since been gradually extended to support a variety of desktop, mobile, console and virtual reality platforms. It is particularly popular for iOS and Android mobile game development and used for games such as Pokémon Go, Monument Valley, Call of Duty: Mobile, Beat Saber and Cuphead. It is considered easy to use for beginner developers and is popular for indie game development.
The engine can be used to create three-dimensional (3D) and two-dimensional (2D) games, as well as interactive simulations and other experiences. The engine has been adopted by industries outside video gaming, such as film, automotive, architecture, engineering, construction, and the United States Armed Forces.</p>

<h2>Installation manual</h2>
<p>First go to https://nodejs.org/en/ and download the one recommended for most users, then download mysql where you will keep the database (https://dev.mysql.com/downloads/installer/), also xammp to activate the mysql server (https://www.apachefriends.org/es/download.html) and finally unity hub (https://unity.com/es/download) where you will save all your projects of unity. </p>
<p>Second, you will have to clone my project into visual studio code (in case you don't have it, download it here: https://code.visualstudio.com/download) with the command: "git clone https://github.com/etrancho/UnityAndNodejs" and do some backend installations in "cd backend":</p>
<p>- 'npm install'</p>
<p>- 'npm install --save sequelize'</p>
<p>Third, we activate the mysql server with xammp:</p>
<img width="400" alt="xammp" src="https://user-images.githubusercontent.com/77303061/146091874-97ea0dd5-e199-43ff-8f6a-dcc81866d290.png">	
<p>And copy and paste in mysql the sql database located in https://github.com/etrancho/UnityAndNodejs/tree/master/backend/database called 'db_mu.sql' and start it, and do "node server.js" while you are in the backend carpet to start the backend.</p>
<p>Then finally you will only need to choose in unity hub the frontend carpet and now you can use my unity app :)</p>

---

<h2>Backend</h2>

<h3>Data model</h3>
<h4>Entity-Relation diagram</h4>
<p align="center">
	<img width="600" alt="er-d" src="https://user-images.githubusercontent.com/77303061/146036037-a76bb4a2-3aa7-4796-810f-126abfefd7ed.png">
</p>
<h4>Relational diagram</h4>
<p>User (<b>id</b>,name,username,isAdmin,password)</p>
<p>Regalo (<b>idR</b>,imgR,nombreR,descripcionR)</p>

<h3>Use cases</h3>
<img width="1100" alt="uc" src="https://user-images.githubusercontent.com/77303061/146036983-85cfafdf-123e-485b-8557-769515145b88.png">

* Users can be:
	* Non-registered
	* Registered 
* In game:
	* Any user can:
		* Open settings
		* Watch clips
		* See gifts from the store
	* A registered user can:
		* Buy gifts 

---

<h2>Frontend</h2>
<h3>Usability</h3>
<p>- I decided to create 3 rooms apart from each other because it was the easiest way to handle each room without disturbing the others</p>
<p>- I added a wall with information to help with the controls of the app</p>
<img width="400" alt="u3" src="https://user-images.githubusercontent.com/77303061/146044877-ac671f49-3132-4d5f-8b45-4e410b9280ce.png">
<p>- The objects from the store were placed separately to fill the room and not leaving it too empty</p>
<img width="400" alt="U1" src="https://user-images.githubusercontent.com/77303061/146040525-b52b8f50-d94c-4aa0-8950-7acd61f0c730.png">
<p>- Every object has a shopping card representing if you want to buy it</p>
<img width="400" alt="u2" src="https://user-images.githubusercontent.com/77303061/146042934-fc30d5f1-c2d4-411d-a73c-165fdf75ec8e.png">
<p>- I decided to imitate a real cinema and not just put a screen</p>
<img width="400" alt="u4" src="https://user-images.githubusercontent.com/77303061/146045416-4d3d54ce-b5a0-44a4-9dc3-66c0f2980f25.png">
<p>- I thought it would be useful to play/pause the video and also turn it off</p>
<img width="400" alt="u5" src="https://user-images.githubusercontent.com/77303061/146045450-c21c6dac-7fba-41c0-97dc-ce9a010c7558.png">
<p>- I created a visual button to sit down and get up to make it look when you sit down in a cinema</p>
<img width="400" alt="u6" src="https://user-images.githubusercontent.com/77303061/146045482-bdc16e2b-e66c-4fc3-802e-cc94dd5d3550.png">

<h2>Conclusion</h2>

<h2>Links and references</h2>
<p><b>How to put a video in unity:</b> https://www.youtube.com/watch?v=lMeTQvBCG4A&ab_channel=DonPachi</p>
<p><b>How to do a first person controller:</b> https://www.youtube.com/watch?v=PEwA2dBG8io&ab_channel=ChrisDesarrollador</p>
<p><b>How to apply a texture on one side of a cube in Unity:</b> https://www.youtube.com/watch?v=TfuoB_S8BM8&ab_channel=jean-gobertdecoster</p>
<p><b>How to use RESTful APIs In Unity:</b> https://www.youtube.com/watch?v=XIbZDz_p6vE&ab_channel=Comp-3Interactive</p>
<p><b>Animations:</b> https://www.mixamo.com/</p>

[Go back to Index](#index)
