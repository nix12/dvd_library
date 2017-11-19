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
            moduleId: module.id,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHZkLml0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHZkLml0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFrRTtBQUNsRSxpREFBOEM7QUFFOUMsOERBQXlEO0FBR3pELHVDQUFvQztBQVFwQztJQUlFLDBCQUFvQixLQUFxQixFQUNyQixVQUFzQixFQUN0QixTQUF1QjtRQUZ2QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTthQUNoQixTQUFTLENBQUMsVUFBQyxNQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQTNDLENBQTJDLENBQUM7YUFDNUUsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLEdBQUc7UUFDYixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBRXZGLE1BQU0sQ0FBQyxZQUFZLENBQUE7SUFDckIsQ0FBQztJQW5CVSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBSzJCLHVCQUFjO1lBQ1Qsd0JBQVU7WUFDWCwrQkFBWTtPQU5oQyxnQkFBZ0IsQ0FvQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFBhcmFtTWFwIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgRHZkU2VydmljZSB9IGZyb20gJy4uLy4uL2R2ZC5zZXJ2aWNlJ1xuaW1wb3J0IHsgTW92aWUgfSBmcm9tICcuLi8uLi9kdmQnXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCcgIFxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtZHZkLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHZkLml0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kdmQuaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIER2ZEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtb3ZpZTogTW92aWVcbiAgaWQ6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIGR2ZFNlcnZpY2U6IER2ZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtTWFwXG4gICAgICAuc3dpdGNoTWFwKChwYXJhbXM6IFBhcmFtTWFwKSA9PiB0aGlzLmR2ZFNlcnZpY2UuZ2V0TW92aWUoK3BhcmFtcy5nZXQoJ2lkJykpKVxuICAgICAgLnN1YnNjcmliZShtb3ZpZSA9PiB0aGlzLm1vdmllID0gbW92aWUpO1xuICB9XG5cbiAgc2FuaXRpemVVcmwodXJsKSB7XG4gICAgbGV0IHNhbml0aXplZFVybCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMScgKyB1cmwpXG5cbiAgICByZXR1cm4gc2FuaXRpemVkVXJsXG4gIH1cbn1cbiJdfQ==