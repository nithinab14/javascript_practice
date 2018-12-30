// index.js
import moment from 'moment';

function date() {
	const element = document.getElementById('date');
	if (element) {
		element.innerText = moment().format('MMMM Do YYYY, h:mm:ss a');
	}
};
setInterval(function() {
	date();
}, 1000);

