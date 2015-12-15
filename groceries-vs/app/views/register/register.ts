import * as dialogsModule from "ui/dialogs";
import * as frameModule from "ui/frame";
import * as observableModule from "data/observable";
import * as pageModule from "ui/page";

import UserViewModel from "../../shared/view-models/user-view-model";
let user = new UserViewModel({});

export function loaded (args: observableModule.EventData) {
    var page = <pageModule.Page>args.object;
    page.bindingContext = user;
};

function completeRegistration () {
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

export function register () {
    completeRegistration();
};