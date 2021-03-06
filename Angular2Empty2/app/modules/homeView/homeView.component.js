"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/// component additional imports
var common = require("./shared");
var HomeViewComponent = (function () {
    /// component additional properties
    function HomeViewComponent(
        /// component constructor dependencies
        _service) {
        this._service = _service;
        /// component constructor method
    }
    Object.defineProperty(HomeViewComponent.prototype, "title", {
        get: function () {
            var result = "Home View";
            /// component custom title
            return result;
        },
        enumerable: true,
        configurable: true
    });
    return HomeViewComponent;
}());
HomeViewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-homeView",
        templateUrl: "homeView.component.html"
        /// component definitions
    }),
    __metadata("design:paramtypes", [common.HomeViewService])
], HomeViewComponent
/// component inheritance
);
exports.HomeViewComponent = HomeViewComponent;
//# sourceMappingURL=homeView.component.js.map