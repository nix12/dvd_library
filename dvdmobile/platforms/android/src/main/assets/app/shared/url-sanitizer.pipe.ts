import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
	name: 'urlSanitizer'
})
export class UrlSanitizerPipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) {}

	transform(url: string): any {
		return this.sanitizer.bypassSecurityTrustResourceUrl('http://moviedatabase-env.us-west-2.elasticbeanstalk.com/' + url);
	}

}
