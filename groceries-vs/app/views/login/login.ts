import * as frameModule from "ui/frame";
import * as observableModule from "data/observable";
import { Page } from "ui/page";
import User from "../../shared/view-models/user-view-model";

let user = new User({
    email: "user@domain.com",
    password: "password"
});

export function loaded(args: observableModule.EventData) {
    let page = <Page>args.object;
    page.bindingContext = user 
}

export function signIn() {
    alert("Signing In");
}

export function register() {
    let topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
}