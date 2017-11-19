"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/http");
var Toast = require("nativescript-toast");
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/catch'
// import 'rxjs/add/Observable/throw'
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.signinUser = function (signInData) {
        var headers = new http_1.Headers;
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        var url = 'http://default-environment.siewsjuk2c.us-west-2.elasticbeanstalk.com/auth/sign_in';
        return this.http.post(url, signInData, options)
            .map(function (res) {
            var body = res.json();
            console.log("body: " + body);
            console.log('status: ' + res.status);
            Toast.makeText('status: ' + res.status).show();
            console.log('statusText: ' + res.statusText);
            Toast.makeText('statusText: ' + res.statusText).show();
            console.log('%O', body);
            return body || null;
        })
            .catch(function (error) {
            return rxjs_1.Observable.throw(error);
        });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZCQUFpQztBQUNqQyxzQ0FBd0U7QUFDeEUsMENBQTJDO0FBQzNDLGlDQUFpQztBQUNqQyxtQ0FBbUM7QUFDbkMscUNBQXFDO0FBR3JDO0lBRUUscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQyxnQ0FBVSxHQUFWLFVBQVcsVUFBK0M7UUFDeEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUM7UUFDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtRQUNsRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtRQUN0RCxJQUFJLEdBQUcsR0FBRyxtRkFBbUYsQ0FBQTtRQUU3RixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUM7YUFDNUMsR0FBRyxDQUFDLFVBQUMsR0FBYTtZQUNqQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUE7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3BDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDNUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFBO1FBQ3JCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDWCxNQUFNLENBQUMsaUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBeEJVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHZSxXQUFJO09BRm5CLFdBQVcsQ0FtQ3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgUmVzcG9uc2UsIEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnXG4vLyBpbXBvcnQgJ3J4anMvYWRkL09ic2VydmFibGUvdGhyb3cnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gIHNpZ25pblVzZXIoc2lnbkluRGF0YTogeyBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nIH0pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycztcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgIGxldCB1cmwgPSAnaHR0cDovL2RlZmF1bHQtZW52aXJvbm1lbnQuc2lld3NqdWsyYy51cy13ZXN0LTIuZWxhc3RpY2JlYW5zdGFsay5jb20vYXV0aC9zaWduX2luJ1xuICAgIFxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHNpZ25JbkRhdGEsIG9wdGlvbnMpXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGxldCBib2R5ID0gcmVzLmpzb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhcImJvZHk6IFwiICsgYm9keSlcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1czogJyArIHJlcy5zdGF0dXMpXG4gICAgICAgIFRvYXN0Lm1ha2VUZXh0KCdzdGF0dXM6ICcgKyByZXMuc3RhdHVzKS5zaG93KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXNUZXh0OiAnICsgcmVzLnN0YXR1c1RleHQpXG4gICAgICAgIFRvYXN0Lm1ha2VUZXh0KCdzdGF0dXNUZXh0OiAnICsgcmVzLnN0YXR1c1RleHQpLnNob3coKTtcbiAgICAgICAgY29uc29sZS5sb2coJyVPJywgYm9keSlcbiAgICAgICAgcmV0dXJuIGJvZHkgfHwgbnVsbFxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpXG4gICAgICB9KVxuICB9XG5cbi8vICAgc2lnbm91dFVzZXIoKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuLy8gICBcdHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25PdXQoKVxuLy8gICBcdFx0Lm1hcChcbi8vICAgICAgICAgcmVzID0+IHtcbi8vICAgICAgICAgICB0aGlzLnVzZXJTaWduZWRJbiQubmV4dChmYWxzZSk7XG4vLyAgICAgICAgICAgcmV0dXJuIHJlcztcbi8vICAgICAgICAgfVxuLy8gXHRcdFx0KTtcbi8vICAgfVxufVxuIl19