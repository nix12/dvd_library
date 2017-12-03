"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DvdService = (function () {
    function DvdService(http) {
        this.http = http;
        this.moviesURL = 'http://moviedatabase-env.us-west-2.elasticbeanstalk.com/movies';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHZkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkdmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBdUU7QUFHdkUsaUNBQThCO0FBRzlCO0lBR0Usb0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRjlCLGNBQVMsR0FBRyxnRUFBZ0UsQ0FBQTtJQUUxQyxDQUFDO0lBRW5DLDhCQUFTLEdBQVQ7UUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNsQyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELDZCQUFRLEdBQVIsVUFBUyxFQUFVO1FBQ2xCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUE7UUFDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFFdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxNQUFNLEVBQUUsT0FBTyxDQUFDO2FBQy9ELEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBakJVLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTt5Q0FJZSxXQUFJO09BSG5CLFVBQVUsQ0FrQnRCO0lBQUQsaUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgTW92aWUgfSBmcm9tICcuL2R2ZCdcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHZkU2VydmljZSB7XG4gIG1vdmllc1VSTCA9ICdodHRwOi8vbW92aWVkYXRhYmFzZS1lbnYudXMtd2VzdC0yLmVsYXN0aWNiZWFuc3RhbGsuY29tL21vdmllcydcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gIGdldE1vdmllcygpOiBPYnNlcnZhYmxlPE1vdmllW10+IHtcbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLm1vdmllc1VSTClcbiAgXHRcdC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXG4gIH1cblxuICBnZXRNb3ZpZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxNb3ZpZT4ge1xuICBcdGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2NlcHQnLCAndmlkZW8vbXA0JylcbiAgXHRsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblxuICBcdHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMubW92aWVzVVJMICsgJy8nICsgaWQgKyAnLm1wNCcsIG9wdGlvbnMpXG4gIFx0XHQubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICB9XG59XG4iXX0=