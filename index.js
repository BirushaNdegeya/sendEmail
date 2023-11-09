const sendEmail = () => {
	let params = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		message: document.getElementById('message').value,
	};

	const serviceID = 'service_kyw30ew';
	const templateID = 'template_e69lyek';

	emailjs
		.send(serviceID, templateID, params)
		.then((res) => {
			document.getElementById('name').value = '';
			document.getElementById('email').value = '';
			document.getElementById('message').value = '';
			console.log(res);
			alert('Your message sent successfuly');
		})
		.catch((err) => console.log(err));
};
