"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dvd_service_1 = require("../dvd.service");
var router_1 = require("@angular/router");
var auth_service_1 = require("../../auth/auth.service");
var Toast = require("nativescript-toast");
var DvdDetailComponent = (function () {
    function DvdDetailComponent(dvdService, router, authService) {
        this.dvdService = dvdService;
        this.router = router;
        this.authService = authService;
        this.movies = [];
    }
    DvdDetailComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    DvdDetailComponent.prototype.getMovies = function () {
        var _this = this;
        this.dvdService.getMovies()
            .subscribe(function (movies) { return _this.movies = movies; });
    };
    DvdDetailComponent.prototype.onSelect = function (movie) {
        this.router.navigate(['/movies', movie.id]);
        Toast.makeText('movie ' + movie.id).show();
    };
    DvdDetailComponent.prototype.onSignout = function () {
        var _this = this;
        this.authService.signoutUser()
            .subscribe(function () {
            _this.router.navigate(['/']);
        });
    };
    DvdDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-dvd-detail',
            templateUrl: './dvd.detail.component.html',
            styleUrls: ['./dvd.detail.component.css']
        }),
        __metadata("design:paramtypes", [dvd_service_1.DvdService,
            router_1.Router,
            auth_service_1.AuthService])
    ], DvdDetailComponent);
    return DvdDetailComponent;
}());
exports.DvdDetailComponent = DvdDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHZkLmRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkdmQuZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw4Q0FBMkM7QUFFM0MsMENBQXdDO0FBQ3hDLHdEQUFxRDtBQUNyRCwwQ0FBMkM7QUFRM0M7SUFJQyw0QkFBb0IsVUFBc0IsRUFDNUIsTUFBYyxFQUNkLFdBQXdCO1FBRmxCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTC9CLFdBQU0sR0FBWSxFQUFFLENBQUE7SUFLZSxDQUFDO0lBRTNDLHFDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDakIsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFBQSxpQkFHQztRQUZBLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO2FBQ3pCLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzNDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUMzQyxDQUFDO0lBRUQsc0NBQVMsR0FBVDtRQUFBLGlCQU9DO1FBTkEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7YUFDNUIsU0FBUyxDQUNUO1lBQ0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQzVCLENBQUMsQ0FDRCxDQUFBO0lBQ0gsQ0FBQztJQTdCVyxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDekMsQ0FBQzt5Q0FLK0Isd0JBQVU7WUFDcEIsZUFBTTtZQUNELDBCQUFXO09BTjFCLGtCQUFrQixDQThCOUI7SUFBRCx5QkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJ1xuaW1wb3J0IHsgRHZkU2VydmljZSB9IGZyb20gJy4uL2R2ZC5zZXJ2aWNlJ1xuaW1wb3J0IHsgTW92aWUgfSBmcm9tICcuLi9kdmQnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlJ1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0J1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdhcHAtZHZkLWRldGFpbCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9kdmQuZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vZHZkLmRldGFpbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHZkRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0cHVibGljIG1vdmllczogTW92aWVbXSA9IFtdXG5cdHB1YmxpYyBzZWxlY3RlZE1vdmllOiBNb3ZpZVxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZHZkU2VydmljZTogRHZkU2VydmljZSxcblx0XHRcdFx0XHRcdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRcdFx0XHRcdFx0cHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZ2V0TW92aWVzKClcblx0fVxuXG5cdGdldE1vdmllcygpOiB2b2lkIHtcblx0XHR0aGlzLmR2ZFNlcnZpY2UuZ2V0TW92aWVzKClcblx0XHRcdC5zdWJzY3JpYmUobW92aWVzID0+IHRoaXMubW92aWVzID0gbW92aWVzKVxuXHR9XG5cblx0b25TZWxlY3QobW92aWU6IGFueSkge1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL21vdmllcycsIG1vdmllLmlkXSlcblx0XHRUb2FzdC5tYWtlVGV4dCgnbW92aWUgJyArIG1vdmllLmlkKS5zaG93KClcblx0fVxuXG5cdG9uU2lnbm91dCgpIHtcblx0XHR0aGlzLmF1dGhTZXJ2aWNlLnNpZ25vdXRVc2VyKClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSlcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHR9XG59XG5cblxuIl19