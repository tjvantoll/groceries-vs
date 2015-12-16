var frameModule = require("ui/frame");
var user_view_model_1 = require("../../shared/view-models/user-view-model");
var user = new user_view_model_1.default({
    email: "tj.vantoll@gmail.com",
    password: "password"
});
function loaded(args) {
    var page = args.object;
    page.bindingContext = user;
}
exports.loaded = loaded;
function signIn() {
    user.login()
        .then(function () {
        frameModule.topmost().navigate("views/list/list");
    }).catch(function (error) {
        console.log(error);
        dialogsModule.alert({
            message: "Unfortunately we could not find your account.",
            okButtonText: "OK"
        });
    });
}
exports.signIn = signIn;
function register() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
}
exports.register = register;
