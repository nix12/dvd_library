"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Toast = require("nativescript-toast");
var Subject_1 = require("rxjs/Subject");
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/catch'
// import 'rxjs/add/Observable/throw'
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
            Toast.makeText('client ' + _this.client).show();
            Toast.makeText('token ' + _this.token).show();
            Toast.makeText('uid ' + _this.uid).show();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHNDQUF3RTtBQUN4RSwwQ0FBMkM7QUFDM0Msd0NBQXNDO0FBQ3RDLGlDQUFpQztBQUNqQyxtQ0FBbUM7QUFDbkMscUNBQXFDO0FBR3JDO0lBTUUscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBTDlCLGlCQUFZLEdBQXFCLElBQUksaUJBQU8sRUFBRSxDQUFBO0lBS2IsQ0FBQztJQUVsQyxnQ0FBVSxHQUFWLFVBQVcsVUFBK0M7UUFBMUQsaUJBeUJDO1FBeEJDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUE7UUFDbEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDdEQsSUFBSSxHQUFHLEdBQUcsbUZBQW1GLENBQUE7UUFFN0YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDO2FBQzVDLEdBQUcsQ0FBQyxVQUFDLEdBQWE7WUFDakIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDNUIsS0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUN2QyxLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBQzVDLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDakMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1lBQzlDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUM1QyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7WUFFeEMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBO1lBQ3JCLCtCQUErQjtZQUMvQix1Q0FBdUM7WUFDdkMsa0RBQWtEO1lBQ2xELCtDQUErQztZQUMvQywwREFBMEQ7WUFDMUQsMEJBQTBCO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFBO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFBQSxpQkFlQztRQWRDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUE7UUFDM0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3JDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMxQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDdEQsSUFBSSxHQUFHLEdBQUcsb0ZBQW9GLENBQUE7UUFFOUYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7YUFDcEMsR0FBRyxDQUNBLFVBQUMsR0FBRztZQUNGLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDYixDQUFDLENBQ0wsQ0FBQztJQUNILENBQUM7SUFsRFUsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQU9lLFdBQUk7T0FObkIsV0FBVyxDQW1EdkI7SUFBRCxrQkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBSZXNwb25zZSwgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCdcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdCdcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnXG4vLyBpbXBvcnQgJ3J4anMvYWRkL09ic2VydmFibGUvdGhyb3cnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHVzZXJTaWduZWRJbjogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KClcbiAgdWlkOiBzdHJpbmdcbiAgdG9rZW46IHN0cmluZ1xuICBjbGllbnQ6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICBzaWduaW5Vc2VyKHNpZ25JbkRhdGE6IHsgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyB9KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnM7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICBsZXQgdXJsID0gJ2h0dHA6Ly9kZWZhdWx0LWVudmlyb25tZW50LnNpZXdzanVrMmMudXMtd2VzdC0yLmVsYXN0aWNiZWFuc3RhbGsuY29tL2F1dGgvc2lnbl9pbidcbiAgICBcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBzaWduSW5EYXRhLCBvcHRpb25zKVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnVzZXJTaWduZWRJbi5uZXh0KHRydWUpXG4gICAgICAgIHRoaXMuY2xpZW50ID0gcmVzLmhlYWRlcnMuZ2V0KCdjbGllbnQnKVxuICAgICAgICB0aGlzLnRva2VuID0gcmVzLmhlYWRlcnMuZ2V0KCdhY2Nlc3MtdG9rZW4nKVxuICAgICAgICB0aGlzLnVpZCA9IHJlcy5oZWFkZXJzLmdldCgndWlkJylcbiAgICAgICAgVG9hc3QubWFrZVRleHQoJ2NsaWVudCAnICsgdGhpcy5jbGllbnQpLnNob3coKVxuICAgICAgICBUb2FzdC5tYWtlVGV4dCgndG9rZW4gJyArIHRoaXMudG9rZW4pLnNob3coKVxuICAgICAgICBUb2FzdC5tYWtlVGV4dCgndWlkICcgKyB0aGlzLnVpZCkuc2hvdygpXG5cbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYm9keTogXCIgKyBib2R5KVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RhdHVzOiAnICsgcmVzLnN0YXR1cylcbiAgICAgICAgLy8gVG9hc3QubWFrZVRleHQoJ3N0YXR1czogJyArIHJlcy5zdGF0dXMpLnNob3coKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0YXR1c1RleHQ6ICcgKyByZXMuc3RhdHVzVGV4dClcbiAgICAgICAgLy8gVG9hc3QubWFrZVRleHQoJ3N0YXR1c1RleHQ6ICcgKyByZXMuc3RhdHVzVGV4dCkuc2hvdygpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnJU8nLCBib2R5KVxuICAgICAgICByZXR1cm4gYm9keSB8fCBudWxsXG4gICAgICB9KVxuICB9XG5cbiAgc2lnbm91dFVzZXIoKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIGhlYWRlcnMuYXBwZW5kKCdjbGllbnQnLCB0aGlzLmNsaWVudClcbiAgICBoZWFkZXJzLmFwcGVuZCgnYWNjZXNzLXRva2VuJywgdGhpcy50b2tlbilcbiAgICBoZWFkZXJzLmFwcGVuZCgndWlkJywgdGhpcy51aWQpXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgbGV0IHVybCA9ICdodHRwOi8vZGVmYXVsdC1lbnZpcm9ubWVudC5zaWV3c2p1azJjLnVzLXdlc3QtMi5lbGFzdGljYmVhbnN0YWxrLmNvbS9hdXRoL3NpZ25fb3V0J1xuICAgIFxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwgb3B0aW9ucylcbiAgXHRcdC5tYXAoXG4gICAgICAgIChyZXMpID0+IHtcbiAgICAgICAgICB0aGlzLnVzZXJTaWduZWRJbi5uZXh0KGZhbHNlKVxuICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cblx0XHRcdCk7XG4gIH1cbn1cbiJdfQ==