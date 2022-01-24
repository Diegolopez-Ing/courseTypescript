"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["User"] = 1] = "User";
    Roles["Admin"] = "ADMIN";
    Roles[Roles["SuperAdmin"] = 56] = "SuperAdmin";
})(Roles || (Roles = {}));
// console.log(Roles.Admin);
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(roles.Admin);
