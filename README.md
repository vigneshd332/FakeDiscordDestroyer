# Fake Discord Destroyer
Send continuous POST requests to fake Discord phishing sites.

### Installation
<ul>
<li> Add the fake discord site login URL to the url variable in line 2. <li>
<li> Install dependancies: <code>npm i</code> </li>
<li> Run the app: <code>node app.js</code> </li>
</ul>

### Behaviour
<ul>
<li>The app slows down to 1 request per 2 seconds when theres no response detected. If there is a response, then it speeds up to 1 request per 50 milliseconds.</li>
<li>The default URL in the code returns a 500 error from the webpage regardless of the input so its the understanding that this is intentional from the server side. See if you get a 500 when you log the error. If you do, then youre good to go.</li>
</ul>

Comment line 15 if you want to disable logging.

### Update
The phony discord site in the code crashed after we ran this app for 2 hours xD.