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
            styleUrls: ['./dvd.item.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            dvd_service_1.DvdService,
            platform_browser_1.DomSanitizer])
    ], DvdItemComponent);
    return DvdItemComponent;
}());
exports.DvdItemComponent = DvdItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHZkLml0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHZkLml0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFrRTtBQUNsRSxpREFBOEM7QUFFOUMsOERBQXlEO0FBR3pELHVDQUFvQztBQVFwQztJQUlFLDBCQUFvQixLQUFxQixFQUNyQixVQUFzQixFQUN0QixTQUF1QjtRQUZ2QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTthQUNoQixTQUFTLENBQUMsVUFBQyxNQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQTNDLENBQTJDLENBQUM7YUFDNUUsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLEdBQUc7UUFDYixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBRXZGLE1BQU0sQ0FBQyxZQUFZLENBQUE7SUFDckIsQ0FBQztJQW5CVSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBSzJCLHVCQUFjO1lBQ1Qsd0JBQVU7WUFDWCwrQkFBWTtPQU5oQyxnQkFBZ0IsQ0FvQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFBhcmFtTWFwIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgRHZkU2VydmljZSB9IGZyb20gJy4uLy4uL2R2ZC5zZXJ2aWNlJ1xuaW1wb3J0IHsgTW92aWUgfSBmcm9tICcuLi8uLi9kdmQnXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCcgIFxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtZHZkLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHZkLml0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kdmQuaXRlbS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHZkSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1vdmllOiBNb3ZpZVxuICBpZDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgZHZkU2VydmljZTogRHZkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyBcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGUucGFyYW1NYXBcbiAgICAgIC5zd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1NYXApID0+IHRoaXMuZHZkU2VydmljZS5nZXRNb3ZpZSgrcGFyYW1zLmdldCgnaWQnKSkpXG4gICAgICAuc3Vic2NyaWJlKG1vdmllID0+IHRoaXMubW92aWUgPSBtb3ZpZSk7XG4gIH1cblxuICBzYW5pdGl6ZVVybCh1cmwpIHtcbiAgICBsZXQgc2FuaXRpemVkVXJsID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybCgnaHR0cDovL2xvY2FsaG9zdDozMDAxJyArIHVybClcblxuICAgIHJldHVybiBzYW5pdGl6ZWRVcmxcbiAgfVxufVxuIl19