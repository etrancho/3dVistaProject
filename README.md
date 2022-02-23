<h1 align="center">IES El Rincón tour</h1>
<p align="center">
  <img src="https://user-images.githubusercontent.com/77303061/154721634-630956f2-1dda-4544-8dd2-3000aa4b8df2.png" width="200px"
			 height="200px"/>
</p>

<h2>Index</h2>

* [Description](#description)
* [Minimun system requirements](#minimun-system-requirements)
* [Technology used](#technology-used)
* [Technology comparison](#technology-comparison)
* [Prototype and usability](#prototype-and-usability)
* [User requirements](#user-requirements)
* [Use cases](#use-cases)
* [Data model](#data-model)
	* [Entity-Relation diagram](#entity-relation-diagram)
	* [UML-diagram](#uml-diagram)
	* [Relational diagram](#relational-diagram)
* [Manuals](#manuals)
	* [Installation manual](#installation-manual)
	* [User manual](#user-manual)
* [Conclusion](#conclusion)
* [Links](#links)

<h2>Description</h2>
<p>This application consists on a tour of the IES El Rincón, it is made with 360º photos taken by us. </p>

<h2>Minimun system requirements</h2>
<p>The 3DVista Virtual Tour PRO program works on all devices from Windows 10 and 11 or OS X. We do recommend 16 Gb RAM and a processor i5 or i7. I suggest you download the trial version to see how it performs on your device if you have doubts (https://www.3dvista.com/en/products/virtualtour). </p>
<p>And for Node.js:</p>
<p>- Memory: 4 GB</p>
<p>- Graphics Card: NVIDIA GeForce GTX 960</p>
<p>- CPU: Intel Core 2 Duo E8400</p>
<p>- OS: windows 7+</p> 

<h2>Technology used</h2>
<img width="200" alt="uc" src="https://user-images.githubusercontent.com/77303061/154741375-45ecd6d9-1965-4db0-8aac-7cd0ba0817db.png">
<p>https://www.3dvista.com/en/ </p>
<p>3DVista Virtual Tour Pro is a multimedia software package that allows you to create interactive 360º virtual tours. 3DVista Virtual Tours can be used to facilitate virtual learning and teaching through the use of hotspots, quiz cards, integrated scoring, reporting systems and LMS integration.</p>
<p>It combines and overlays many different features and media types in order to create immersive virtual environments. Richly layered outputs are able to provide sense of what the real environment might look, feel and sound like. Media such as 360º images (panoramas), 360º videos, embedded sounds, videos, photographs, floor plans and clickable hotspots allow students to explore the virtual site and engage in interactive learning while feeling like they are in the space.
</p>

<img width="200" alt="uc" src="https://user-images.githubusercontent.com/77303061/154741722-d7f87419-6d3d-46e9-a10f-248e208877af.png">
<p>https://nodejs.org/en/ </p>
<p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.
</p>

<h2>Technology comparison</h2>

<h2>Prototype and usability</h2>
<p>
	<b>Intro</b></br>
	This interface is the first one the users will see when they enter the application, it has a navegation bar where we can see the scenes and change the background to 		another scene, the advertisements, the location of the school, the web page of the school and some options for users(log in, log out, register and settings)
</p>
<img width="600" alt="uc" src="https://user-images.githubusercontent.com/77303061/154742501-14c2e196-a1e0-404b-ac08-a89bbf2197f1.png">

<p>
	<b>Advertisement</b></br>
	This interface will show the advertisement you chose in the navegation bar
</p>
<img width="600" alt="uc" src="https://user-images.githubusercontent.com/77303061/154742604-1d98066e-7efb-48ce-903e-f9c9813d8b6c.png">

<p>
	<b>Google Maps</b></br>
	This interface will show the location in google maps of the school
</p>
<img width="600" alt="uc" src="https://user-images.githubusercontent.com/77303061/154742754-ee17daf1-b929-4e7f-8488-26c9bec0b8a6.png">

<p>
	<b>Info</b></br>
	This interface will show the web page of the shool
</p>
<img width="600" alt="uc" src="https://user-images.githubusercontent.com/77303061/154742857-b5440810-dcdb-42c8-97f2-8a29538435cc.png">

<p>
	<b>Log in</b></br>
	This interface will let you log in if you have already registered, and if there is any problem it will explain the error
</p>
<img width="600" alt="uc" src="https://user-images.githubusercontent.com/77303061/154742914-97a55cc5-7b09-4498-8f5e-fbb8ebd8ad04.png">

<p>
	<b>Register</b></br>
	This interface will let you create an account, and if there is any problem it will explain the error
</p>
<img width="600" alt="uc" src="https://user-images.githubusercontent.com/77303061/154742986-677956b7-5a25-4b90-88e5-30d9ca10c28b.png">

<p>
	<b>Settings</b></br>
	This interface shows your personal information and lets you change the username, password and delete your account, and if
	there is any problem it will explain the error
</p>
<img width="600" alt="uc" src="https://user-images.githubusercontent.com/77303061/154743060-3549c9b1-0bb7-47df-a56c-0f344955c8ff.png">

<h2>User requirements</h2>
<h3>R1. It is designed for pc/laptops</h3>
<h3>R2. There is no need to log in to see the application</h3>
<h3>R3. The app has a navegation bar, where there is three dropdowns and two texts with links</h3>
	<h4><b>Dropdowns</b></h4>
	<p>1. Scenes: it will apear a list of the scenes that are in the app</p>
	<p>2. Advertisements: it will apear a list of the ads that are in the app</p>
	<p>3. User: it will appear some links (log in, log out, register and settings)</p>
	<h4><b>Text with links</b></h4>
	<p>1. Location: it will apear a window of the location in google maps of the school</p>
	<p>2. Info: it will apear a window of the web page of the school</p>
<h3>R4. User links</h3>
	<h4><b>Log in</b></h4>
	<p>If there is any problem it will explain what it is and how it can be solved</p>
	<h4><b>Log out</b></h4>
	<p>If the user has loged in it will apear this option</p>
	<h4><b>Register</b></h4>
	<p>If there is any problem it will explain what it is and how it can be solved</p>
	<h4><b>Settings</b></h4>
	<p>If there is any problem it will explain what it is and how it can be solved</p>

<h2>Use cases</h2>
<p align="center">
	<img width="900" alt="uc" src="https://user-images.githubusercontent.com/77303061/154741064-2c0577b2-08bd-42a4-a5d4-9365c531ab06.png">
</p>

<h2>Data model</h2>
<p>Postman link: https://documenter.getpostman.com/view/18173142/UVkjvxmx</p>

* Users can be:
	* Non-registered
	* Registered 
* In the app:
	* Any user can:
		* see the app
		* register
	* A registered user can:
		* change the username
		* change the password
		* delete the account 
		* log in
		* log out

<h3>Entity-Relation diagram</h3>
<p align="center">
	<img width="700" alt="er-d" src="https://user-images.githubusercontent.com/77303061/154732448-ca0db8ba-2629-408a-8629-da3b56c2f6a4.png">
</p>

<h3>UML diagram</h3>
<p align="center">
	<img width="400" alt="er-d" src="https://user-images.githubusercontent.com/77303061/154733285-f5d85d8f-604d-4ddf-be33-f247811f008f.png">
</p>

<h3>Relational diagram</h3>
<p>user (<b>idU</b>, nameU, passU, emailU, tfU, idCU*)</p>
<p>classroom (<b>idC</b>, nameC, studentsC)</p>
<p>ad (<b>idA</b>, nameA, descriptionA, idCA*)</p>


<h2>Manuals</h2>
<h3>Installation manual</h3>
<h3>User manual</h3>

<h2>Conclusion</h2>


<h2>Links</h2>


[Go back to Index](#index)
