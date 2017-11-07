"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DvdService = (function () {
    function DvdService(http) {
        this.http = http;
        this.moviesURL = 'http://localhost:3001/movies';
    }
    DvdService.prototype.getMovies = function () {
        return this.http.get(this.moviesURL)
            .map(function (res) { return res.json(); });
    };
    DvdService.prototype.getMovie = function (id) {
        var headers = new http_1.Headers({ 'Accept': 'video/mp4' });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHZkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkdmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBdUU7QUFHdkUsaUNBQThCO0FBRzlCO0lBR0Usb0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRjlCLGNBQVMsR0FBRyw4QkFBOEIsQ0FBQTtJQUVSLENBQUM7SUFFbkMsOEJBQVMsR0FBVDtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ2xDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsNkJBQVEsR0FBUixVQUFTLEVBQVU7UUFDbEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQTtRQUNwRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtRQUV0RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLE1BQU0sRUFBRSxPQUFPLENBQUM7YUFDL0QsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFoQlUsVUFBVTtRQUR0QixpQkFBVSxFQUFFO3lDQUllLFdBQUk7T0FIbkIsVUFBVSxDQWlCdEI7SUFBRCxpQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIlxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBNb3ZpZSB9IGZyb20gJy4vZHZkJ1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEdmRTZXJ2aWNlIHtcbiAgbW92aWVzVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9tb3ZpZXMnXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICBnZXRNb3ZpZXMoKTogT2JzZXJ2YWJsZTxNb3ZpZVtdPiB7XG4gIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5tb3ZpZXNVUkwpXG4gIFx0XHQubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICB9XG5cbiAgZ2V0TW92aWUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8TW92aWU+IHtcbiAgXHRsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0FjY2VwdCc6ICd2aWRlby9tcDQnIH0pXG4gIFx0bGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cbiAgXHRyZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLm1vdmllc1VSTCArICcvJyArIGlkICsgJy5tcDQnLCBvcHRpb25zKVxuICBcdFx0Lm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcbiAgfVxufVxuIl19