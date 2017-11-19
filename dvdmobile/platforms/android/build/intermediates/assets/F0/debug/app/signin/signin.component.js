"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var Toast = require("nativescript-toast");
var SigninComponent = (function () {
    function SigninComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.signinForm = new forms_1.FormGroup({
            'email': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.email,
                forms_1.Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
            'password': new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    SigninComponent.prototype.onSignin = function (form) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var options = new http_1.RequestOptions({ headers: headers });
        var email = form.email;
        var password = form.password;
        var signin = { email: email, password: password };
        var url = 'http://moviedatabase-env.us-west-2.elasticbeanstalk.com';
        this.http.post(url, JSON.stringify(signin), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            if (res.status == 200) {
                _this.router.navigate(['/library'], { queryParams: { jwt: res.token } });
            }
        }, function (error) {
            Toast.makeText(error.json().message).show();
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            http_1.Http])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQXdDO0FBQ3hDLHdDQUFrRTtBQUNsRSxzQ0FBdUU7QUFDdkUsMENBQTRDO0FBUTVDO0lBR0UseUJBQW9CLE1BQWMsRUFDZCxJQUFVO1FBRFYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBRWxDLGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksaUJBQVMsQ0FBQztZQUM5QixPQUFPLEVBQUUsSUFBSSxtQkFBVyxDQUFDLElBQUksRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsS0FBSztnQkFDckMsa0JBQVUsQ0FBQyxPQUFPLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDO1lBQzNHLFVBQVUsRUFBRSxJQUFJLG1CQUFXLENBQUMsSUFBSSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3ZELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxrQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUFsQixpQkFxQkM7UUFwQkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQTtRQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFBO1FBQ2xELElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQ3RELElBQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDaEMsSUFBTSxRQUFRLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUN0QyxJQUFJLE1BQU0sR0FBRyxFQUFFLEtBQUssT0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUE7UUFDaEMsSUFBSSxHQUFHLEdBQUcseURBQXlELENBQUE7UUFFbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxDQUFDO2FBQ2pELEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDbEMsU0FBUyxDQUNSLFVBQUMsR0FBRztZQUNGLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQ3pFLENBQUM7UUFDSCxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0osS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUMsQ0FBQyxDQUNGLENBQUE7SUFDTCxDQUFDO0lBbkNVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7eUNBSTRCLGVBQU07WUFDUixXQUFJO09BSm5CLGVBQWUsQ0FvQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCdcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCdcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXNpZ25pbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWduaW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWduaW4uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWduaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzaWduaW5Gb3JtOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2lnbmluRm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgJ2VtYWlsJzogbmV3IEZvcm1Db250cm9sKG51bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnBhdHRlcm4oXCJbYS16QS1aMC05Li1fXXsxLH1AW2EtekEtWi4tXXsyLH1bLl17MX1bYS16QS1aXXsyLH1cIildKSxcbiAgICAgICdwYXNzd29yZCc6IG5ldyBGb3JtQ29udHJvbChudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSBcbiAgICB9KVxuICB9XG5cbiAgb25TaWduaW4oZm9ybTogYW55KSB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgY29uc3QgZW1haWw6IHN0cmluZyA9IGZvcm0uZW1haWxcbiAgICBjb25zdCBwYXNzd29yZDogc3RyaW5nID0gZm9ybS5wYXNzd29yZFxuICAgIGxldCBzaWduaW4gPSB7IGVtYWlsLCBwYXNzd29yZCB9XG4gICAgbGV0IHVybCA9ICdodHRwOi8vbW92aWVkYXRhYmFzZS1lbnYudXMtd2VzdC0yLmVsYXN0aWNiZWFuc3RhbGsuY29tJ1xuXG4gICAgdGhpcy5odHRwLnBvc3QodXJsLCBKU09OLnN0cmluZ2lmeShzaWduaW4pLCBvcHRpb25zKVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xpYnJhcnknXSwgeyBxdWVyeVBhcmFtczogeyBqd3Q6IHJlcy50b2tlbiB9IH0pXG4gICAgICAgICAgfSBcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgVG9hc3QubWFrZVRleHQoZXJyb3IuanNvbigpLm1lc3NhZ2UpLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgKVxuICB9XG59Il19