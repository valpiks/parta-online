document.getElementById('contactForm').addEventListener('submit', function (e) {
	e.preventDefault();

	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;

	const subject = `Сообщение от ${name}`;
	const body = `${message}\n\n---\nОтправитель: ${name}\nEmail для ответа: ${email}`;

	const mailtoLink = `mailto:petrovdanilo32@gmail.com?subject=${encodeURIComponent(
		subject
	)}&body=${encodeURIComponent(body)}`;

	const mailWindow = window.open(mailtoLink, '_blank');

	setTimeout(() => {
		if (
			!mailWindow ||
			mailWindow.closed ||
			typeof mailWindow.closed == 'undefined'
		) {
			document.getElementById('fb-subject').textContent = subject;
			document.getElementById('fb-body').textContent = body;
			document.getElementById('fallback').style.display = 'block';

			document.getElementById('fallback').scrollIntoView({
				behavior: 'smooth',
			});
		}
	}, 500);
});
