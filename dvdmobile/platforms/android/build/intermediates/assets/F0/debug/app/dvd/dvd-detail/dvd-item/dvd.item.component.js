"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dvd_service_1 = require("../../dvd.service");
var platform_browser_1 = require("@angular/platform-browser");
require("rxjs/add/operator/switchMap");
var DvdItemComponent = (function () {
    function DvdItemComponent(route, dvdService, sanitizer) {
        this.route = route;
        this.dvdService = dvdService;
        this.sanitizer = sanitizer;
    }
    DvdItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.dvdService.getMovie(+params.get('id')); })
            .subscribe(function (movie) { return _this.movie = movie; });
    };
    DvdItemComponent.prototype.sanitizeUrl = function (url) {
        var sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl('http://localhost:3001' + url);
        return sanitizedUrl;
    };
    DvdItemComponent = __decorate([
        core_1.Component({
            selector: 'app-dvd-item',
            templateUrl: './dvd.item.component.html',
            styleUrls: ['./dvd.item.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            dvd_service_1.DvdService,
            platform_browser_1.DomSanitizer])
    ], DvdItemComponent);
    return DvdItemComponent;
}());
exports.DvdItemComponent = DvdItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHZkLml0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHZkLml0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFrRTtBQUNsRSxpREFBOEM7QUFFOUMsOERBQXlEO0FBR3pELHVDQUFvQztBQU9wQztJQUlFLDBCQUFvQixLQUFxQixFQUNyQixVQUFzQixFQUN0QixTQUF1QjtRQUZ2QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTthQUNoQixTQUFTLENBQUMsVUFBQyxNQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQTNDLENBQTJDLENBQUM7YUFDNUUsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLEdBQUc7UUFDYixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBRXZGLE1BQU0sQ0FBQyxZQUFZLENBQUE7SUFDckIsQ0FBQztJQW5CVSxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzt5Q0FLMkIsdUJBQWM7WUFDVCx3QkFBVTtZQUNYLCtCQUFZO09BTmhDLGdCQUFnQixDQW9CNUI7SUFBRCx1QkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUGFyYW1NYXAgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBEdmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZHZkLnNlcnZpY2UnXG5pbXBvcnQgeyBNb3ZpZSB9IGZyb20gJy4uLy4uL2R2ZCdcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJyAgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kdmQtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kdmQuaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2R2ZC5pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHZkSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1vdmllOiBNb3ZpZVxuICBpZDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgZHZkU2VydmljZTogRHZkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyBcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGUucGFyYW1NYXBcbiAgICAgIC5zd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1NYXApID0+IHRoaXMuZHZkU2VydmljZS5nZXRNb3ZpZSgrcGFyYW1zLmdldCgnaWQnKSkpXG4gICAgICAuc3Vic2NyaWJlKG1vdmllID0+IHRoaXMubW92aWUgPSBtb3ZpZSk7XG4gIH1cblxuICBzYW5pdGl6ZVVybCh1cmwpIHtcbiAgICBsZXQgc2FuaXRpemVkVXJsID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybCgnaHR0cDovL2xvY2FsaG9zdDozMDAxJyArIHVybClcblxuICAgIHJldHVybiBzYW5pdGl6ZWRVcmxcbiAgfVxufVxuIl19