"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var auth_service_1 = require("../auth.service");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQTBEO0FBQzFELHdDQUFpRztBQUNqRyxzQ0FBdUU7QUFDdkUsZ0RBQTZDO0FBUzdDO0lBR0UseUJBQW9CLE1BQWMsRUFDZCxJQUFVLEVBQ1YsRUFBZSxFQUNmLFdBQXdCO1FBSHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUVoRCxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM5QixPQUFPLEVBQUUsSUFBSSxtQkFBVyxDQUFDLElBQUksRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsS0FBSztnQkFDckMsa0JBQVUsQ0FBQyxPQUFPLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDO1lBQzNHLFVBQVUsRUFBRSxJQUFJLG1CQUFXLENBQUMsSUFBSSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3ZELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxrQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUFsQixpQkEwQkM7UUF6QkMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUN4QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBRTlCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQzthQUM3QyxTQUFTLENBQ1I7WUFDRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDbEMsQ0FBQztRQUVELGFBQWE7UUFDYixpQ0FBaUM7UUFDakMsdUNBQXVDO1FBQ3ZDLGFBQWE7UUFDYiwyQ0FBMkM7UUFDM0Msc0RBQXNEO1FBQ3RELE1BQU07UUFDTixLQUFLO1FBQ0wsZUFBZTtRQUNmLDBDQUEwQztRQUMxQyxLQUFLO1FBQ0wsV0FBVztRQUNYLGlDQUFpQztRQUNqQywyQ0FBMkM7UUFDM0MsSUFBSTtTQUNMLENBQUE7SUFDTCxDQUFDO0lBMUNVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7eUNBSTRCLGVBQU07WUFDUixXQUFJO1lBQ04sbUJBQVc7WUFDRiwwQkFBVztPQU5qQyxlQUFlLENBMkMzQjtJQUFELHNCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7QUEzQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJ1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9hdXRoLnNlcnZpY2UnXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1zaWduaW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbmluLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbmluLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWduaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzaWduaW5Gb3JtOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgICAgICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zaWduaW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAnZW1haWwnOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucGF0dGVybihcIlthLXpBLVowLTkuLV9dezEsfUBbYS16QS1aLi1dezIsfVsuXXsxfVthLXpBLVpdezIsfVwiKV0pLFxuICAgICAgJ3Bhc3N3b3JkJzogbmV3IEZvcm1Db250cm9sKG51bGwsIFZhbGlkYXRvcnMucmVxdWlyZWQpIFxuICAgIH0pXG4gIH1cblxuICBvblNpZ25pbihmb3JtOiBhbnkpIHtcbiAgICBjb25zdCBlbWFpbCA9IGZvcm0uZW1haWxcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm0ucGFzc3dvcmRcblxuICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbmluVXNlcih7IGVtYWlsLCBwYXNzd29yZCB9KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbW92aWVzJ10pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIChyZXMpID0+IHtcbiAgICAgICAgLy8gICBpZihyZXMuc3RhdHVzVGV4dCA9PSAnT0snKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ21vdmllcyddKVxuICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMuc3RhdHVzICsgJyBGQUlMVVJFJylcbiAgICAgICAgLy8gICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5zdGF0dXMgKyAnIEZBSUxVUkUnKS5zaG93KCk7XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gICBUb2FzdC5tYWtlVGV4dChlcnJvci5tZXNzYWdlKS5zaG93KCk7XG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vICgpID0+IHsgXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ0lOIFNVQlNDUklCRScpIFxuICAgICAgICAvLyAgIFRvYXN0Lm1ha2VUZXh0KCdJTiBTVUJTQ1JJQkUnKS5zaG93KCk7XG4gICAgICAgIC8vIH1cbiAgICAgIClcbiAgfVxufSJdfQ==