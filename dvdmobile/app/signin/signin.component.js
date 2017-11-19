"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var auth_service_1 = require("../auth/auth.service");
var SigninComponent = (function () {
    function SigninComponent(router, http, fb, authService) {
        this.router = router;
        this.http = http;
        this.fb = fb;
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.signinForm = this.fb.group({
            'email': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.email,
                forms_1.Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
            'password': new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    SigninComponent.prototype.onSignin = function (form) {
        var _this = this;
        var email = form.email;
        var password = form.password;
        this.authService.signinUser({ email: email, password: password })
            .subscribe(function () {
            _this.router.navigate(['movies']);
        }
        // (res) => {
        //   if(res.statusText == 'OK') {
        //     this.router.navigate(['movies'])
        //   } else {
        //     console.log(res.status + ' FAILURE')
        //     Toast.makeText(res.status + ' FAILURE').show();
        //   }
        // },
        // (error) => {
        //   Toast.makeText(error.message).show();
        // },
        // () => { 
        //   console.log('IN SUBSCRIBE') 
        //   Toast.makeText('IN SUBSCRIBE').show();
        // }
        );
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            http_1.Http,
            forms_1.FormBuilder,
            auth_service_1.AuthService])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQTBEO0FBQzFELHdDQUFpRztBQUNqRyxzQ0FBdUU7QUFDdkUscURBQWtEO0FBU2xEO0lBR0UseUJBQW9CLE1BQWMsRUFDZCxJQUFVLEVBQ1YsRUFBZSxFQUNmLFdBQXdCO1FBSHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUVoRCxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM5QixPQUFPLEVBQUUsSUFBSSxtQkFBVyxDQUFDLElBQUksRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsS0FBSztnQkFDckMsa0JBQVUsQ0FBQyxPQUFPLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDO1lBQzNHLFVBQVUsRUFBRSxJQUFJLG1CQUFXLENBQUMsSUFBSSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3ZELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxrQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUFsQixpQkEwQkM7UUF6QkMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUN4QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBRTlCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQzthQUM3QyxTQUFTLENBQ1I7WUFDRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDbEMsQ0FBQztRQUVELGFBQWE7UUFDYixpQ0FBaUM7UUFDakMsdUNBQXVDO1FBQ3ZDLGFBQWE7UUFDYiwyQ0FBMkM7UUFDM0Msc0RBQXNEO1FBQ3RELE1BQU07UUFDTixLQUFLO1FBQ0wsZUFBZTtRQUNmLDBDQUEwQztRQUMxQyxLQUFLO1FBQ0wsV0FBVztRQUNYLGlDQUFpQztRQUNqQywyQ0FBMkM7UUFDM0MsSUFBSTtTQUNMLENBQUE7SUFDTCxDQUFDO0lBMUNVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7eUNBSTRCLGVBQU07WUFDUixXQUFJO1lBQ04sbUJBQVc7WUFDRiwwQkFBVztPQU5qQyxlQUFlLENBMkMzQjtJQUFELHNCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7QUEzQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJ1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9hdXRoL2F1dGguc2VydmljZSdcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXNpZ25pbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWduaW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWduaW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHNpZ25pbkZvcm06IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgICAgICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNpZ25pbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICdlbWFpbCc6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuKFwiW2EtekEtWjAtOS4tX117MSx9QFthLXpBLVouLV17Mix9Wy5dezF9W2EtekEtWl17Mix9XCIpXSksXG4gICAgICAncGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZCkgXG4gICAgfSlcbiAgfVxuXG4gIG9uU2lnbmluKGZvcm06IGFueSkge1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybS5lbWFpbFxuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5wYXNzd29yZFxuXG4gICAgdGhpcy5hdXRoU2VydmljZS5zaWduaW5Vc2VyKHsgZW1haWwsIHBhc3N3b3JkIH0pXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydtb3ZpZXMnXSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gKHJlcykgPT4ge1xuICAgICAgICAvLyAgIGlmKHJlcy5zdGF0dXNUZXh0ID09ICdPSycpIHtcbiAgICAgICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbW92aWVzJ10pXG4gICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcy5zdGF0dXMgKyAnIEZBSUxVUkUnKVxuICAgICAgICAvLyAgICAgVG9hc3QubWFrZVRleHQocmVzLnN0YXR1cyArICcgRkFJTFVSRScpLnNob3coKTtcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIChlcnJvcikgPT4ge1xuICAgICAgICAvLyAgIFRvYXN0Lm1ha2VUZXh0KGVycm9yLm1lc3NhZ2UpLnNob3coKTtcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gKCkgPT4geyBcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnSU4gU1VCU0NSSUJFJykgXG4gICAgICAgIC8vICAgVG9hc3QubWFrZVRleHQoJ0lOIFNVQlNDUklCRScpLnNob3coKTtcbiAgICAgICAgLy8gfVxuICAgICAgKVxuICB9XG59Il19