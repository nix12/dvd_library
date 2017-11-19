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
            styleUrls: ['./dvd.detail.component.scss']
        }),
        __metadata("design:paramtypes", [dvd_service_1.DvdService,
            router_1.Router])
    ], DvdDetailComponent);
    return DvdDetailComponent;
}());
exports.DvdDetailComponent = DvdDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHZkLmRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkdmQuZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw4Q0FBMkM7QUFFM0MsMENBQXdDO0FBUXhDO0lBSUUsNEJBQW9CLFVBQXNCLEVBQ3RCLE1BQWM7UUFEZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKbEMsV0FBTSxHQUFZLEVBQUUsQ0FBQTtJQUlrQixDQUFDO0lBRXZDLHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDbEIsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO2FBQ3hCLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxLQUFZO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFBO0lBQzVCLENBQUM7SUFsQlUsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzNDLENBQUM7eUNBS2dDLHdCQUFVO1lBQ2QsZUFBTTtPQUx2QixrQkFBa0IsQ0FtQjlCO0lBQUQseUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnXG5pbXBvcnQgeyBEdmRTZXJ2aWNlIH0gZnJvbSAnLi4vZHZkLnNlcnZpY2UnXG5pbXBvcnQgeyBNb3ZpZSB9IGZyb20gJy4uL2R2ZCdcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWR2ZC1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHZkLmRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2R2ZC5kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEdmREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtb3ZpZXM6IE1vdmllW10gPSBbXVxuICBwdWJsaWMgc2VsZWN0ZWRNb3ZpZTogTW92aWVcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGR2ZFNlcnZpY2U6IER2ZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2V0TW92aWVzKClcbiAgfVxuXG4gIGdldE1vdmllcygpOiB2b2lkIHtcbiAgICB0aGlzLmR2ZFNlcnZpY2UuZ2V0TW92aWVzKClcbiAgICAgIC5zdWJzY3JpYmUobW92aWVzID0+IHRoaXMubW92aWVzID0gbW92aWVzKVxuICB9XG5cbiAgb25TZWxlY3QobW92aWU6IE1vdmllKSB7XG4gICAgdGhpcy5zZWxlY3RlZE1vdmllID0gbW92aWVcbiAgfVxufVxuXG5cbiJdfQ==