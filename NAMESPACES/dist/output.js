"use strict";
var Utility;
(function (Utility) {
    let Taxes;
    (function (Taxes) {
        function calculateIva(price) {
            return price * (price * 0.21);
        }
        Taxes.calculateIva = calculateIva;
        function calculatePenaltyIva(price) {
            return price * (price * 0.30);
        }
        Taxes.calculatePenaltyIva = calculatePenaltyIva;
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));
/// <reference path="utility.ts"/>
let utils = Utility.Taxes;
console.log(utils.calculateIva(100));
console.log(utils.calculatePenaltyIva(200));
