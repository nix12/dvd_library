"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var UrlSanitizerPipe = (function () {
    function UrlSanitizerPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    UrlSanitizerPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl('http://moviedatabase-env.us-west-2.elasticbeanstalk.com/' + url);
    };
    UrlSanitizerPipe = __decorate([
        core_1.Pipe({
            name: 'urlSanitizer'
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], UrlSanitizerPipe);
    return UrlSanitizerPipe;
}());
exports.UrlSanitizerPipe = UrlSanitizerPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXNhbml0aXplci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXJsLXNhbml0aXplci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9EO0FBQ3BELDhEQUF5RDtBQU16RDtJQUNDLDBCQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUcsQ0FBQztJQUUvQyxvQ0FBUyxHQUFULFVBQVUsR0FBVztRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQywwREFBMEQsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN4SCxDQUFDO0lBTFcsZ0JBQWdCO1FBSDVCLFdBQUksQ0FBQztZQUNMLElBQUksRUFBRSxjQUFjO1NBQ3BCLENBQUM7eUNBRThCLCtCQUFZO09BRC9CLGdCQUFnQixDQU81QjtJQUFELHVCQUFDO0NBQUEsQUFQRCxJQU9DO0FBUFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cblxuQFBpcGUoe1xuXHRuYW1lOiAndXJsU2FuaXRpemVyJ1xufSlcbmV4cG9ydCBjbGFzcyBVcmxTYW5pdGl6ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG5cblx0dHJhbnNmb3JtKHVybDogc3RyaW5nKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCdodHRwOi8vbW92aWVkYXRhYmFzZS1lbnYudXMtd2VzdC0yLmVsYXN0aWNiZWFuc3RhbGsuY29tLycgKyB1cmwpO1xuXHR9XG5cbn1cbiJdfQ==