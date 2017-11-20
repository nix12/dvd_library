"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dvd_service_1 = require("../dvd.service");
var router_1 = require("@angular/router");
var auth_service_1 = require("../../auth/auth.service");
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
        this.selectedMovie = movie;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHZkLmRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkdmQuZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw4Q0FBMkM7QUFFM0MsMENBQXdDO0FBQ3hDLHdEQUFxRDtBQVFyRDtJQUlDLDRCQUFvQixVQUFzQixFQUM1QixNQUFjLEVBQ2QsV0FBd0I7UUFGbEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFMdEMsV0FBTSxHQUFZLEVBQUUsQ0FBQTtJQUtzQixDQUFDO0lBRTNDLHFDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDakIsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFBQSxpQkFHQztRQUZBLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO2FBQ3pCLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxLQUFZO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFBO0lBQzNCLENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQUEsaUJBT0M7UUFOQSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRTthQUM1QixTQUFTLENBQ1Q7WUFDQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDNUIsQ0FBQyxDQUNELENBQUE7SUFDSCxDQUFDO0lBNUJXLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUN6QyxDQUFDO3lDQUsrQix3QkFBVTtZQUNwQixlQUFNO1lBQ0QsMEJBQVc7T0FOMUIsa0JBQWtCLENBNkI5QjtJQUFELHlCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4J1xuaW1wb3J0IHsgRHZkU2VydmljZSB9IGZyb20gJy4uL2R2ZC5zZXJ2aWNlJ1xuaW1wb3J0IHsgTW92aWUgfSBmcm9tICcuLi9kdmQnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlJ1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdhcHAtZHZkLWRldGFpbCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9kdmQuZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vZHZkLmRldGFpbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHZkRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0bW92aWVzOiBNb3ZpZVtdID0gW11cblx0cHVibGljIHNlbGVjdGVkTW92aWU6IE1vdmllXG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkdmRTZXJ2aWNlOiBEdmRTZXJ2aWNlLFxuXHRcdFx0XHRcdFx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdFx0XHRcdFx0XHRwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5nZXRNb3ZpZXMoKVxuXHR9XG5cblx0Z2V0TW92aWVzKCk6IHZvaWQge1xuXHRcdHRoaXMuZHZkU2VydmljZS5nZXRNb3ZpZXMoKVxuXHRcdFx0LnN1YnNjcmliZShtb3ZpZXMgPT4gdGhpcy5tb3ZpZXMgPSBtb3ZpZXMpXG5cdH1cblxuXHRvblNlbGVjdChtb3ZpZTogTW92aWUpIHtcblx0XHR0aGlzLnNlbGVjdGVkTW92aWUgPSBtb3ZpZVxuXHR9XG5cblx0b25TaWdub3V0KCkge1xuXHRcdHRoaXMuYXV0aFNlcnZpY2Uuc2lnbm91dFVzZXIoKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKVxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdH1cbn1cblxuXG4iXX0=