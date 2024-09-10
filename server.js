const app = require('./index');

app.listen(process.env.APP_PORT || 3000, () => {
	console.log('Server is running in port:', process.env.APP_PORT || 3000);
});
