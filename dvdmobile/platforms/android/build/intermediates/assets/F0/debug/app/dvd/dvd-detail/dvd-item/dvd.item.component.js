"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dvd_service_1 = require("../../dvd.service");
var platform_browser_1 = require("@angular/platform-browser");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("VideoPlayer", function () { return require("nativescript-videoplayer").Video; });
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
        var sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl('http://moviedatabase-env.us-west-2.elasticbeanstalk.com' + url);
        return sanitizedUrl;
    };
    DvdItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-dvd-item',
            templateUrl: './dvd.item.component.html',
            styleUrls: ['./dvd.item.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            dvd_service_1.DvdService,
            platform_browser_1.DomSanitizer])
    ], DvdItemComponent);
    return DvdItemComponent;
}());
exports.DvdItemComponent = DvdItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHZkLml0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHZkLml0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFrRTtBQUNsRSxpREFBOEM7QUFFOUMsOERBQXlEO0FBQ3pELDBFQUF1RTtBQUN2RSxrQ0FBZSxDQUFDLGFBQWEsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUMsS0FBSyxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDaEYsdUNBQW9DO0FBUXBDO0lBSUUsMEJBQW9CLEtBQXFCLEVBQ3JCLFVBQXNCLEVBQ3RCLFNBQXVCO1FBRnZCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUMzQyxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2FBQ2hCLFNBQVMsQ0FBQyxVQUFDLE1BQWdCLElBQUssT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQzthQUM1RSxTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksR0FBRztRQUNiLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMseURBQXlELEdBQUcsR0FBRyxDQUFDLENBQUE7UUFFekgsTUFBTSxDQUFDLFlBQVksQ0FBQTtJQUNyQixDQUFDO0lBbkJVLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQzt5Q0FLMkIsdUJBQWM7WUFDVCx3QkFBVTtZQUNYLCtCQUFZO09BTmhDLGdCQUFnQixDQW9CNUI7SUFBRCx1QkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUGFyYW1NYXAgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBEdmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZHZkLnNlcnZpY2UnXG5pbXBvcnQgeyBNb3ZpZSB9IGZyb20gJy4uLy4uL2R2ZCdcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSdcbnJlZ2lzdGVyRWxlbWVudChcIlZpZGVvUGxheWVyXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdmlkZW9wbGF5ZXJcIikuVmlkZW8pO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnICBcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWR2ZC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R2ZC5pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHZkLml0ZW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIER2ZEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtb3ZpZTogTW92aWVcbiAgaWQ6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIGR2ZFNlcnZpY2U6IER2ZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtTWFwXG4gICAgICAuc3dpdGNoTWFwKChwYXJhbXM6IFBhcmFtTWFwKSA9PiB0aGlzLmR2ZFNlcnZpY2UuZ2V0TW92aWUoK3BhcmFtcy5nZXQoJ2lkJykpKVxuICAgICAgLnN1YnNjcmliZShtb3ZpZSA9PiB0aGlzLm1vdmllID0gbW92aWUpO1xuICB9XG5cbiAgc2FuaXRpemVVcmwodXJsKSB7XG4gICAgbGV0IHNhbml0aXplZFVybCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwoJ2h0dHA6Ly9tb3ZpZWRhdGFiYXNlLWVudi51cy13ZXN0LTIuZWxhc3RpY2JlYW5zdGFsay5jb20nICsgdXJsKVxuXG4gICAgcmV0dXJuIHNhbml0aXplZFVybFxuICB9XG59XG4iXX0=