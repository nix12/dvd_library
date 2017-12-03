"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var auth_service_1 = require("../auth/auth.service");
require("rxjs/add/operator/map");
var Toast = require("nativescript-toast");
var DvdService = (function () {
    function DvdService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.moviesURL = 'http://moviedatabase-env.us-west-2.elasticbeanstalk.com/movies';
    }
    DvdService.prototype.getMovies = function () {
        var headers = new http_1.Headers();
        headers.append('access-token', this.authService.token);
        headers.append('client', this.authService.client);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.moviesURL, options)
            .map(function (res) { return res.json(); });
    };
    DvdService.prototype.getMovie = function (id) {
        var headers = new http_1.Headers();
        headers.append('Accept', 'video/mp4');
        headers.append('access-token', this.authService.token);
        headers.append('client', this.authService.client);
        var options = new http_1.RequestOptions({ headers: headers });
        Toast.makeText('id ' + id).show();
        return this.http.get(this.moviesURL + '/' + id + '.mp4', options)
            .map(function (res) { return res.json(); });
    };
    DvdService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            auth_service_1.AuthService])
    ], DvdService);
    return DvdService;
}());
exports.DvdService = DvdService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHZkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkdmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBdUU7QUFHdkUscURBQWtEO0FBQ2xELGlDQUE4QjtBQUM5QiwwQ0FBMkM7QUFHM0M7SUFHRSxvQkFBb0IsSUFBVSxFQUNWLFdBQXdCO1FBRHhCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUg1QyxjQUFTLEdBQUcsZ0VBQWdFLENBQUE7SUFHNUIsQ0FBQztJQUVqRCw4QkFBUyxHQUFUO1FBQ0UsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQTtRQUMvQixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RELE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDakQsSUFBTSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFFdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO2FBQzNDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsNkJBQVEsR0FBUixVQUFTLEVBQVU7UUFDbEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQTtRQUMxQixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUNyQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3hELE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDL0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFFdEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7UUFFbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxNQUFNLEVBQUUsT0FBTyxDQUFDO2FBQy9ELEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBM0JVLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTt5Q0FJZSxXQUFJO1lBQ0csMEJBQVc7T0FKakMsVUFBVSxDQTRCdEI7SUFBRCxpQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIlxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSdcbmltcG9ydCB7IE1vdmllIH0gZnJvbSAnLi9kdmQnXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGgvYXV0aC5zZXJ2aWNlJ1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEdmRTZXJ2aWNlIHtcbiAgbW92aWVzVVJMID0gJ2h0dHA6Ly9tb3ZpZWRhdGFiYXNlLWVudi51cy13ZXN0LTIuZWxhc3RpY2JlYW5zdGFsay5jb20vbW92aWVzJ1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHsgfVxuXG4gIGdldE1vdmllcygpOiBPYnNlcnZhYmxlPE1vdmllW10+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuXHRcdGhlYWRlcnMuYXBwZW5kKCdhY2Nlc3MtdG9rZW4nLCB0aGlzLmF1dGhTZXJ2aWNlLnRva2VuKVxuXHRcdGhlYWRlcnMuYXBwZW5kKCdjbGllbnQnLCB0aGlzLmF1dGhTZXJ2aWNlLmNsaWVudClcblx0XHRjb25zdCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KVxuXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5tb3ZpZXNVUkwsIG9wdGlvbnMpXG4gIFx0XHQubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICB9XG5cbiAgZ2V0TW92aWUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8TW92aWU+IHtcbiAgXHRsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ3ZpZGVvL21wNCcpXG4gICAgaGVhZGVycy5hcHBlbmQoJ2FjY2Vzcy10b2tlbicsIHRoaXMuYXV0aFNlcnZpY2UudG9rZW4pXG5cdFx0aGVhZGVycy5hcHBlbmQoJ2NsaWVudCcsIHRoaXMuYXV0aFNlcnZpY2UuY2xpZW50KVxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgIFxuICAgIFRvYXN0Lm1ha2VUZXh0KCdpZCAnICsgaWQpLnNob3coKVxuXG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5tb3ZpZXNVUkwgKyAnLycgKyBpZCArICcubXA0Jywgb3B0aW9ucylcbiAgXHRcdC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXG4gIH1cbn1cbiJdfQ==