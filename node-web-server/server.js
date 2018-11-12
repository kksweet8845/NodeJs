const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

//next can tell express when we are done
/*next is a middleware between requester and route handler

*/
app.use((req, res , next) => {
	var now = new Date().toString();
	console.log(`${now} : ${req.method} ${req.url}`);
	next();
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});
hbs.registerHelper('getCurrentYear',() => {
	return new Date().getFullYear();
});

app.get('/about',(req,res) => {
	console.log(`${req.method}`);
	res.render('about.hbs',{
		pageTitle: 'About Page',
	});
});

app.get('/',(req,res) =>{
	res.render('home.hbs',{
			tabTitle: 'Index',
			pageTitle: 'Index Page',
			welcomeMessage: 'Welcome to my website',
			tagSmall: 'h1'
	});
});


app.listen(3000);
