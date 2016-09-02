# Legacy Browser Blocker

Legacy Browser Blocker (LB2) is blocking view your site from IE / Edge.

## Usage

#### 1. Load LB2.js
Write following code in `<head>`
LB2 using jquery.

```javascript
<head>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdn.rawgit.com/katabamia/Legacy_Browser_Blocker/LB2.js"></script>
</head>
```

#### 2. Create Block message
Write like following code in `<body>`

** NOTE **  If LB2 detected LegacyBrowser, `id="LB2_Blocked"` div will shown. If not, `id="LB2_Passed"` div will shown.

```html
<body>
	<div id="LB2_Blocked">
	<!-- You can write any message for IE / Edge here. -->
		<div class="container">
			<h1>Please use ModernBrowser.</h1>
			<h2>This site is only supported GoogleChrome, FireFox, and other ModernBrowser.</h2>
		</div>
	</div>

	<div id="LB2_Passed">
	<!-- You can write code for ModernBrowser here. -->	
		<div class="container">
			<h1>Nice!</h1>
			<h2>You are using ModernBrowser!!</h2>
		</div>
	</div>
</body>
```

#### 3. Finish!
That's all for using LB2.  
Any issue? plz open issue.  
Any improve? plz PR!  

##### Special Thanks
LB2 core from [here.](https://arisu.tachibana.cool/happybirthday)