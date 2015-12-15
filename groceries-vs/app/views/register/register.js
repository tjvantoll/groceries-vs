var dialogsModule = require("ui/dialogs");
var frameModule = require("ui/frame");
var user_view_model_1 = require("../../shared/view-models/user-view-model");
var user = new user_view_model_1.default({});
function loaded(args) {
    var page = args.object;
    page.bindingContext = user;
}
exports.loaded = loaded;
;
function completeRegistration() {
    user.register()
        .then(function () {
        dialogsModule
            .alert("Your account was successfully created.")
            .then(function () {
            frameModule.topmost().navigate("views/login/login");
        });
    }).catch(function () {
        dialogsModule
            .alert({
            message: "Unfortunately we were unable to create your account.",
            okButtonText: "OK"
        });
    });
}
function register() {
    completeRegistration();
}
exports.register = register;
;
