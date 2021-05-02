import './polyfills';
import { serverInstance } from './server';

serverInstance().listen(serverInstance().get('port'), () => {
	console.log('App is running at http://localhost:%d in %s mode', serverInstance().get('port'), serverInstance().get('env'));
});
