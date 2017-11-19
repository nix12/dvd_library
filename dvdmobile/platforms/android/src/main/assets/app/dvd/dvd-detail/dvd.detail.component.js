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
            moduleId: module.id,
            selector: 'app-dvd-detail',
            templateUrl: './dvd.detail.component.html',
            styleUrls: ['./dvd.detail.component.css']
        }),
        __metadata("design:paramtypes", [dvd_service_1.DvdService,
            router_1.Router])
    ], DvdDetailComponent);
    return DvdDetailComponent;
}());
exports.DvdDetailComponent = DvdDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHZkLmRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkdmQuZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw4Q0FBMkM7QUFFM0MsMENBQXdDO0FBUXhDO0lBSUUsNEJBQW9CLFVBQXNCLEVBQ3RCLE1BQWM7UUFEZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKbEMsV0FBTSxHQUFZLEVBQUUsQ0FBQTtJQUlrQixDQUFDO0lBRXZDLHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDbEIsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO2FBQ3hCLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxLQUFZO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFBO0lBQzVCLENBQUM7SUFsQlUsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7eUNBS2dDLHdCQUFVO1lBQ2QsZUFBTTtPQUx2QixrQkFBa0IsQ0FtQjlCO0lBQUQseUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnXG5pbXBvcnQgeyBEdmRTZXJ2aWNlIH0gZnJvbSAnLi4vZHZkLnNlcnZpY2UnXG5pbXBvcnQgeyBNb3ZpZSB9IGZyb20gJy4uL2R2ZCdcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWR2ZC1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHZkLmRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2R2ZC5kZXRhaWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIER2ZERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1vdmllczogTW92aWVbXSA9IFtdXG4gIHB1YmxpYyBzZWxlY3RlZE1vdmllOiBNb3ZpZVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZHZkU2VydmljZTogRHZkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZXRNb3ZpZXMoKVxuICB9XG5cbiAgZ2V0TW92aWVzKCk6IHZvaWQge1xuICAgIHRoaXMuZHZkU2VydmljZS5nZXRNb3ZpZXMoKVxuICAgICAgLnN1YnNjcmliZShtb3ZpZXMgPT4gdGhpcy5tb3ZpZXMgPSBtb3ZpZXMpXG4gIH1cblxuICBvblNlbGVjdChtb3ZpZTogTW92aWUpIHtcbiAgICB0aGlzLnNlbGVjdGVkTW92aWUgPSBtb3ZpZVxuICB9XG59XG5cblxuIl19