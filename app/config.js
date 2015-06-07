app.factory('config', function ($rootScope, $http) {
	var config = {
		fireRoot: 			'https://teachtobe.firebaseio.com/',
		fireRef: 			new Firebase('https://teachtobe.firebaseio.com/'),
		parseRoot: 			'https://api.parse.com/1/',
	 	parseAppId: 		'zfDP3N3odw8jn19Ob9VXfiM9wdAYEGlyBqHUMAMr',
	 	parseJsKey: 		'ezxsDtWWQzWC5spvug4QQTdAgQxlXvHUAA5NwMUn',
	 	parseRestApiKey: 	'noFlpD3Y7wdS3oIiwdYzKhy7LgrYJNuUSx4A8KeT',
	 	roles: 				['Manager','Director','Coordinator','Facilitator']
	};

	Parse.initialize(config.parseAppId, config.parseJsKey);
	 $http.defaults.headers.common['X-Parse-Application-Id'] = config.parseAppId;
	 $http.defaults.headers.common['X-Parse-REST-API-Key'] = config.parseRestApiKey;
	 $http.defaults.headers.common['Content-Type'] = 'application/json';

	return config;
});