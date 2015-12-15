var frameModule = require("ui/frame");
var user_view_model_1 = require("../../shared/view-models/user-view-model");
var user = new user_view_model_1.default({
    email: "user@domain.com",
    password: "password"
});
function loaded(args) {
    var page = args.object;
    page.bindingContext = user;
}
exports.loaded = loaded;
function signIn() {
    alert("Signing In");
}
exports.signIn = signIn;
function register() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
}
exports.register = register;
