"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("VideoPlayer", function () { return require("nativescript-videoplayer").Video; });
require("rxjs/add/operator/switchMap");
var DvdItemComponent = (function () {
    function DvdItemComponent(route, sanitizer) {
        this.route = route;
        this.sanitizer = sanitizer;
    }
    DvdItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            _this.id = +params['id'];
        });
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
        __metadata("design:paramtypes", [router_1.PageRoute,
            platform_browser_1.DomSanitizer])
    ], DvdItemComponent);
    return DvdItemComponent;
}());
exports.DvdItemComponent = DvdItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHZkLml0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHZkLml0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUF1RDtBQUV2RCw4REFBeUQ7QUFDekQsMEVBQXVFO0FBQ3ZFLGtDQUFlLENBQUMsYUFBYSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxLQUFLLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUNoRix1Q0FBb0M7QUFRcEM7SUFJRSwwQkFBb0IsS0FBZ0IsRUFDaEIsU0FBdUI7UUFEdkIsVUFBSyxHQUFMLEtBQUssQ0FBVztRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzNDLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWM7YUFDdEIsU0FBUyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQzthQUNsRCxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ2QsS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksR0FBRztRQUNiLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMseURBQXlELEdBQUcsR0FBRyxDQUFDLENBQUE7UUFFekgsTUFBTSxDQUFDLFlBQVksQ0FBQTtJQUNyQixDQUFDO0lBcEJVLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQzt5Q0FLMkIsa0JBQVM7WUFDTCwrQkFBWTtPQUxoQyxnQkFBZ0IsQ0FxQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgTW92aWUgfSBmcm9tICcuLi8uLi9kdmQnXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknXG5yZWdpc3RlckVsZW1lbnQoXCJWaWRlb1BsYXllclwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXZpZGVvcGxheWVyXCIpLlZpZGVvKTtcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJyAgXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1kdmQtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kdmQuaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2R2ZC5pdGVtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEdmRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbW92aWU6IE1vdmllXG4gIGlkOiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBQYWdlUm91dGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy5pZCA9ICtwYXJhbXNbJ2lkJ107XG4gICAgICB9KTtcbiAgfVxuXG4gIHNhbml0aXplVXJsKHVybCkge1xuICAgIGxldCBzYW5pdGl6ZWRVcmwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKCdodHRwOi8vbW92aWVkYXRhYmFzZS1lbnYudXMtd2VzdC0yLmVsYXN0aWNiZWFuc3RhbGsuY29tJyArIHVybClcblxuICAgIHJldHVybiBzYW5pdGl6ZWRVcmxcbiAgfVxufVxuIl19