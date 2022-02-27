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
<p>This application consists on a tour of the IES El Rincón, it is made with 360º photos taken by us, and it is a collaboration with ITC (Instituto tecnológico de Canarias). </p>

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
<p><b>Native app: </b>Native apps are written in code languages specific to the particular operating system that they are developed for. First, it was Java for Android and Objective-C for iOS but, due to the fast-paced software development we faced since the last few decades, these technologies have been replaced by Kotlin (Android) and Swift (iOS).</p>
<p><b>Pros:</b></p>
<p>- Fast performance due to simpler code and ecosystem's support (maintenance and development stability)</p>
<p>- Higher security (protected by many different layers of an operating system which makes them difficult to exploit)</p>
<p>- Non-dependence on open-source libraries/third-party frameworks</p>
<p>- Access to hardware features (quick and easy to implement)</p>
<p><b>Cons:</b></p>
<p>- Takes longer and is more expensive to have them simultaneously on iOs and Android</p>
<p>- Adding new features requires separate codebases</p>
<p>- Need a bigger team of specialists in native languages</p>

<p><b>Hybrid app:</b>Hybrid app development combines elements of both native and web apps. They allow developers to code in one single language that can run in different operating systems.</p>
<p><b>Pros:</b></p>
<p>- Lower development costs (especially when creating for several different platforms)</p>
<p>- Easier maintenance (based on web solutions)</p>
<p>- Easier to add new features (due to one codebase)</p>
<p>- Integration with Web-based services</p>

<p><b>Cons:</b></p>
<p>- Complex apps with many features will run slower</p>
<p>- Rely on system browser security</p>
<p>- Having just one codebase means the app run equally everywhere (could not perform specific iOS or Android features)</p>

<p><b>Web apps:</b> Web application is simply an application which works over a web browser. All the applications here run on a web server instead of a local server. </p>
<p><b>Pros:</b></p>
<p>-It is way cheaper compared to other types of app developments</p>
<p>- It doesn't need to be updated often</p>
<p>- In order for running a web application, you don't need to download them separately</p>

<p><b>Cons:</b></p>
<p>- It is directly linked to a web browser</p>
<p>- It lacks the feature of quality control system</p>
<p>- They are rare to find since they are not available in any App Store or Play Store</p>
<p>- An internet connection is compulsory when running a web application</p>

<p><b>Progressive Web Apps:</b> Progressive web apps are relatively new to this app development scenario, having had more widespread adoption in the latest years. These are web apps that seek to appear and act exactly like the native ones.</p>
<p><b>Pros</b></p>
<p>- Access on different platforms and devices</p>
<p>- These apps can be found online in the browser (no app store needed)</p>
<p>- User interaction and navigation is identical to native apps</p>

<p><b>Cons:</b></p>
<p>- Hardware and operating system features limitations</p>
<p>- Hardware integration problems</p>
<p>- Not available on app stores</p>


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
<p>First, we need to install node.js (https://nodejs.org/en/), the one recommended for most users: </p>
<img width="500" src="https://user-images.githubusercontent.com/77303061/155373909-32ea33dc-4ca6-4324-bd97-bc3b1f21598a.png">
<p>And 3dVista the free trial (https://www.3dvista.com/en/products/virtualtour):</p>
<img width="500" src="https://user-images.githubusercontent.com/77303061/155373627-1e0fb64c-b072-4e7a-917b-8880d7ab417a.png">
<p>In the case we do not have visual studio code, we install it(https://code.visualstudio.com/download):
<img width="500" src="https://user-images.githubusercontent.com/77303061/155562872-d6feb76d-8241-4b55-aba3-926a0be9088d.png">
<p>We open visual studio code and the terminal and write 'git clone https://github.com/etrancho/3dVistaProject' to clone the project:</p>
<img width="600" src="https://user-images.githubusercontent.com/77303061/155563955-d93dbda4-b275-4191-aaed-0bb6c7266729.png">
<p><b>Installations: (in the backend folder)</b></p>
<p>- 'npm install'</p>
<p>- 'npm install sequelize'</p>
<p><b>To start:</b></p>
<p>- Backend: 'cd backend' and 'node server.js'. Port: 4000</p>
<p>- Websockets: 'cd backend/websockets' and 'node index.js'. Port: 5000</p>
	
<h3>User manual</h3>
<p>Open 3d Vista and open the project in the frontend folder. It is very easy to understand and use because you only have to follow the lines to continue seeing the others scenes. There is also icons like the one of the photo that means you can enter a classroom o enter a web page</p>
<img src="https://user-images.githubusercontent.com/77303061/155895336-398db98f-740f-4c09-b1b3-d1d4598f5f1a.png" width="200">

<h2>Conclusion</h2>
<p>We think working with 3d Vista has been a little difficult at first because we did not know how to use it and we struggled a lot with implementing coding in it, but then we managed and learned how to do it. And with node.js it has not been that difficult because we have already used it in other projects or in class. We hope to see more 3d vista tutorials in some time, or even create some of them ourselves so people do not struggle that much with this apllication.</p>

<h2>Links</h2>
<p>https://nodejs.org/en/</p>
<p>https://www.3dvista.com/en/products/virtualtour</p>
<p>https://www.itccanarias.org/web/es/</p>


[Go back to Index](#index)
