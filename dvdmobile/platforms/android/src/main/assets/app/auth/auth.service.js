"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/map");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.userSignedIn = new Subject_1.Subject();
    }
    AuthService.prototype.signinUser = function (signInData) {
        var _this = this;
        var headers = new http_1.Headers;
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        var url = 'http://default-environment.siewsjuk2c.us-west-2.elasticbeanstalk.com/auth/sign_in';
        return this.http.post(url, signInData, options)
            .map(function (res) {
            _this.userSignedIn.next(true);
            _this.client = res.headers.get('client');
            _this.token = res.headers.get('access-token');
            _this.uid = res.headers.get('uid');
            // Toast.makeText('client ' + this.client).show()
            // Toast.makeText('token ' + this.token).show()
            // Toast.makeText('uid ' + this.uid).show()
            var body = res.json();
            // console.log("body: " + body)
            // console.log('status: ' + res.status)
            // Toast.makeText('status: ' + res.status).show();
            // console.log('statusText: ' + res.statusText)
            // Toast.makeText('statusText: ' + res.statusText).show();
            // console.log('%O', body)
            return body || null;
        });
    };
    AuthService.prototype.signoutUser = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('client', this.client);
        headers.append('access-token', this.token);
        headers.append('uid', this.uid);
        var options = new http_1.RequestOptions({ headers: headers });
        var url = 'http://default-environment.siewsjuk2c.us-west-2.elasticbeanstalk.com/auth/sign_out';
        return this.http.delete(url, options)
            .map(function (res) {
            _this.userSignedIn.next(false);
            return res;
        });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHNDQUF3RTtBQUV4RSx3Q0FBc0M7QUFDdEMsaUNBQThCO0FBRzlCO0lBTUUscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBTDlCLGlCQUFZLEdBQXFCLElBQUksaUJBQU8sRUFBRSxDQUFBO0lBS2IsQ0FBQztJQUVsQyxnQ0FBVSxHQUFWLFVBQVcsVUFBK0M7UUFBMUQsaUJBeUJDO1FBeEJDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUE7UUFDbEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDdEQsSUFBSSxHQUFHLEdBQUcsbUZBQW1GLENBQUE7UUFFN0YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDO2FBQzVDLEdBQUcsQ0FBQyxVQUFDLEdBQWE7WUFDakIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDNUIsS0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUN2QyxLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBQzVDLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDakMsaURBQWlEO1lBQ2pELCtDQUErQztZQUMvQywyQ0FBMkM7WUFFM0MsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBO1lBQ3JCLCtCQUErQjtZQUMvQix1Q0FBdUM7WUFDdkMsa0RBQWtEO1lBQ2xELCtDQUErQztZQUMvQywwREFBMEQ7WUFDMUQsMEJBQTBCO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFBO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFBQSxpQkFlQztRQWRDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUE7UUFDM0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3JDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMxQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDdEQsSUFBSSxHQUFHLEdBQUcsb0ZBQW9GLENBQUE7UUFFOUYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7YUFDcEMsR0FBRyxDQUNBLFVBQUMsR0FBRztZQUNGLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDYixDQUFDLENBQ0wsQ0FBQztJQUNILENBQUM7SUFsRFUsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQU9lLFdBQUk7T0FObkIsV0FBVyxDQW1EdkI7SUFBRCxrQkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSdcbmltcG9ydCB7IFJlc3BvbnNlLCBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgfSBmcm9tICdAYW5ndWxhci9odHRwJ1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0J1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCdcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICB1c2VyU2lnbmVkSW46IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpXG4gIHVpZDogc3RyaW5nXG4gIHRva2VuOiBzdHJpbmdcbiAgY2xpZW50OiBzdHJpbmdcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgc2lnbmluVXNlcihzaWduSW5EYXRhOiB7IGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcgfSk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgbGV0IHVybCA9ICdodHRwOi8vZGVmYXVsdC1lbnZpcm9ubWVudC5zaWV3c2p1azJjLnVzLXdlc3QtMi5lbGFzdGljYmVhbnN0YWxrLmNvbS9hdXRoL3NpZ25faW4nXG4gICAgXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgc2lnbkluRGF0YSwgb3B0aW9ucylcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy51c2VyU2lnbmVkSW4ubmV4dCh0cnVlKVxuICAgICAgICB0aGlzLmNsaWVudCA9IHJlcy5oZWFkZXJzLmdldCgnY2xpZW50JylcbiAgICAgICAgdGhpcy50b2tlbiA9IHJlcy5oZWFkZXJzLmdldCgnYWNjZXNzLXRva2VuJylcbiAgICAgICAgdGhpcy51aWQgPSByZXMuaGVhZGVycy5nZXQoJ3VpZCcpXG4gICAgICAgIC8vIFRvYXN0Lm1ha2VUZXh0KCdjbGllbnQgJyArIHRoaXMuY2xpZW50KS5zaG93KClcbiAgICAgICAgLy8gVG9hc3QubWFrZVRleHQoJ3Rva2VuICcgKyB0aGlzLnRva2VuKS5zaG93KClcbiAgICAgICAgLy8gVG9hc3QubWFrZVRleHQoJ3VpZCAnICsgdGhpcy51aWQpLnNob3coKVxuXG4gICAgICAgIGxldCBib2R5ID0gcmVzLmpzb24oKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJvZHk6IFwiICsgYm9keSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0YXR1czogJyArIHJlcy5zdGF0dXMpXG4gICAgICAgIC8vIFRvYXN0Lm1ha2VUZXh0KCdzdGF0dXM6ICcgKyByZXMuc3RhdHVzKS5zaG93KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdGF0dXNUZXh0OiAnICsgcmVzLnN0YXR1c1RleHQpXG4gICAgICAgIC8vIFRvYXN0Lm1ha2VUZXh0KCdzdGF0dXNUZXh0OiAnICsgcmVzLnN0YXR1c1RleHQpLnNob3coKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJyVPJywgYm9keSlcbiAgICAgICAgcmV0dXJuIGJvZHkgfHwgbnVsbFxuICAgICAgfSlcbiAgfVxuXG4gIHNpZ25vdXRVc2VyKCk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICBoZWFkZXJzLmFwcGVuZCgnY2xpZW50JywgdGhpcy5jbGllbnQpXG4gICAgaGVhZGVycy5hcHBlbmQoJ2FjY2Vzcy10b2tlbicsIHRoaXMudG9rZW4pXG4gICAgaGVhZGVycy5hcHBlbmQoJ3VpZCcsIHRoaXMudWlkKVxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgIGxldCB1cmwgPSAnaHR0cDovL2RlZmF1bHQtZW52aXJvbm1lbnQuc2lld3NqdWsyYy51cy13ZXN0LTIuZWxhc3RpY2JlYW5zdGFsay5jb20vYXV0aC9zaWduX291dCdcbiAgICBcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIG9wdGlvbnMpXG4gIFx0XHQubWFwKFxuICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy51c2VyU2lnbmVkSW4ubmV4dChmYWxzZSlcbiAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG5cdFx0XHQpO1xuICB9XG59XG4iXX0=