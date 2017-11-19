"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DvdService = (function () {
    function DvdService(http) {
        this.http = http;
        this.moviesURL = 'http://moviedatabase-env.us-west-2.elasticbeanstalk.com';
    }
    DvdService.prototype.getMovies = function () {
        return this.http.get(this.moviesURL)
            .map(function (res) { return res.json(); });
    };
    DvdService.prototype.getMovie = function (id) {
        var headers = new http_1.Headers();
        headers.append('Accept', 'video/mp4');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.moviesURL + '/' + id + '.mp4', options)
            .map(function (res) { return res.json(); });
    };
    DvdService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DvdService);
    return DvdService;
}());
exports.DvdService = DvdService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHZkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkdmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBdUU7QUFHdkUsaUNBQThCO0FBRzlCO0lBR0Usb0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRjlCLGNBQVMsR0FBRyx5REFBeUQsQ0FBQTtJQUVuQyxDQUFDO0lBRW5DLDhCQUFTLEdBQVQ7UUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNsQyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELDZCQUFRLEdBQVIsVUFBUyxFQUFVO1FBQ2xCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUE7UUFDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFFdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxNQUFNLEVBQUUsT0FBTyxDQUFDO2FBQy9ELEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBakJVLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTt5Q0FJZSxXQUFJO09BSG5CLFVBQVUsQ0FrQnRCO0lBQUQsaUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgTW92aWUgfSBmcm9tICcuL2R2ZCdcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHZkU2VydmljZSB7XG4gIG1vdmllc1VSTCA9ICdodHRwOi8vbW92aWVkYXRhYmFzZS1lbnYudXMtd2VzdC0yLmVsYXN0aWNiZWFuc3RhbGsuY29tJ1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgZ2V0TW92aWVzKCk6IE9ic2VydmFibGU8TW92aWVbXT4ge1xuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMubW92aWVzVVJMKVxuICBcdFx0Lm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcbiAgfVxuXG4gIGdldE1vdmllKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPE1vdmllPiB7XG4gIFx0bGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gICAgaGVhZGVycy5hcHBlbmQoJ0FjY2VwdCcsICd2aWRlby9tcDQnKVxuICBcdGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KVxuXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5tb3ZpZXNVUkwgKyAnLycgKyBpZCArICcubXA0Jywgb3B0aW9ucylcbiAgXHRcdC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXG4gIH1cbn1cbiJdfQ==