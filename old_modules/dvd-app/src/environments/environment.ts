// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	token_auth_config: {
		// apiBase: 'http://localhost:3000'
		apiBase: 'http://default-environment.siewsjuk2c.us-west-2.elasticbeanstalk.com'
		// apiBase: 'https://boiling-retreat-40992.herokuapp.com'
	}
};
