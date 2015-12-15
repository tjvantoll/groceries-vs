var application = require("application");
application.mainModule = "views/login/login";
// Remove this in the AppBuilder templates
application.cssFile = "./app.css";
application.start();
