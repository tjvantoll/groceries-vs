import * as frameModule from "ui/frame";
import * as observableModule from "data/observable";
import { Page } from "ui/page";
import User from "../../shared/view-models/user-view-model";

let user = new User({
    email: "tj.vantoll@gmail.com",
    password: "password"
});

export function loaded(args: observableModule.EventData) {
    let page = <Page>args.object;
    page.bindingContext = user 
}

export function signIn() {
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

export function register() {
    let topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
}