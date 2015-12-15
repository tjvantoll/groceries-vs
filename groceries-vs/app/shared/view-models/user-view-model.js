var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var config = require("../../shared/config");
var fetchModule = require("fetch");
var observableModule = require("data/observable");
var User = (function (_super) {
    __extends(User, _super);
    function User(info) {
        _super.call(this);
        this.email = info.email || "";
        this.password = info.password || "";
    }
    User.prototype.register = function () {
        return fetchModule.fetch(config.apiUrl + "Users", {
            method: "POST",
            body: JSON.stringify({
                Username: this.get("email"),
                Email: this.get("email"),
                Password: this.get("password")
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleErrors);
    };
    return User;
})(observableModule.Observable);
function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}
exports.default = User;
