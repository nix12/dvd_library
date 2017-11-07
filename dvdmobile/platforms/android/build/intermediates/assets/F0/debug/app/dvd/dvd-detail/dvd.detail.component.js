"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dvd_service_1 = require("../dvd.service");
var router_1 = require("@angular/router");
var DvdDetailComponent = (function () {
    function DvdDetailComponent(dvdService, router) {
        this.dvdService = dvdService;
        this.router = router;
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
    DvdDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-dvd-detail',
            templateUrl: './dvd.detail.component.html',
            styleUrls: ['./dvd.detail.component.scss']
        }),
        __metadata("design:paramtypes", [dvd_service_1.DvdService,
            router_1.Router])
    ], DvdDetailComponent);
    return DvdDetailComponent;
}());
exports.DvdDetailComponent = DvdDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHZkLmRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkdmQuZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw4Q0FBMkM7QUFFM0MsMENBQXdDO0FBT3hDO0lBSUUsNEJBQW9CLFVBQXNCLEVBQ3RCLE1BQWM7UUFEZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKbEMsV0FBTSxHQUFZLEVBQUUsQ0FBQTtJQUlrQixDQUFDO0lBRXZDLHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDbEIsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO2FBQ3hCLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxLQUFZO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFBO0lBQzVCLENBQUM7SUFsQlUsa0JBQWtCO1FBTDlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDM0MsQ0FBQzt5Q0FLZ0Msd0JBQVU7WUFDZCxlQUFNO09BTHZCLGtCQUFrQixDQW1COUI7SUFBRCx5QkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCdcbmltcG9ydCB7IER2ZFNlcnZpY2UgfSBmcm9tICcuLi9kdmQuc2VydmljZSdcbmltcG9ydCB7IE1vdmllIH0gZnJvbSAnLi4vZHZkJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZHZkLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kdmQuZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHZkLmRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIER2ZERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1vdmllczogTW92aWVbXSA9IFtdXG4gIHB1YmxpYyBzZWxlY3RlZE1vdmllOiBNb3ZpZVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZHZkU2VydmljZTogRHZkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZXRNb3ZpZXMoKVxuICB9XG5cbiAgZ2V0TW92aWVzKCk6IHZvaWQge1xuICAgIHRoaXMuZHZkU2VydmljZS5nZXRNb3ZpZXMoKVxuICAgICAgLnN1YnNjcmliZShtb3ZpZXMgPT4gdGhpcy5tb3ZpZXMgPSBtb3ZpZXMpXG4gIH1cblxuICBvblNlbGVjdChtb3ZpZTogTW92aWUpIHtcbiAgICB0aGlzLnNlbGVjdGVkTW92aWUgPSBtb3ZpZVxuICB9XG59XG5cblxuIl19