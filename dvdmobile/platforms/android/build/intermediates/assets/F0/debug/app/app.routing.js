"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dvd_detail_component_1 = require("./dvd/dvd-detail/dvd.detail.component");
var dvd_item_component_1 = require("./dvd/dvd-detail/dvd-item/dvd.item.component");
var signin_component_1 = require("./signin/signin.component");
var routes = [
    { path: "", component: signin_component_1.SigninComponent },
    { path: "movies", component: dvd_detail_component_1.DvdDetailComponent },
    { path: ":id", component: dvd_item_component_1.DvdItemComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsOEVBQTBFO0FBQzFFLG1GQUErRTtBQUMvRSw4REFBMkQ7QUFFM0QsSUFBTSxNQUFNLEdBQVc7SUFDdEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUseUNBQWtCLEVBQUU7SUFDakQsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxxQ0FBZ0IsRUFBRTtDQUU3QyxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDcEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IER2ZERldGFpbENvbXBvbmVudCB9IGZyb20gJy4vZHZkL2R2ZC1kZXRhaWwvZHZkLmRldGFpbC5jb21wb25lbnQnXG5pbXBvcnQgeyBEdmRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9kdmQvZHZkLWRldGFpbC9kdmQtaXRlbS9kdmQuaXRlbS5jb21wb25lbnQnXG5pbXBvcnQgeyBTaWduaW5Db21wb25lbnQgfSBmcm9tICcuL3NpZ25pbi9zaWduaW4uY29tcG9uZW50J1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcblx0eyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudCB9LFxuICB7IHBhdGg6IFwibW92aWVzXCIsIGNvbXBvbmVudDogRHZkRGV0YWlsQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogXCI6aWRcIiwgY29tcG9uZW50OiBEdmRJdGVtQ29tcG9uZW50IH0sXG5cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=