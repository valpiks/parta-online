document.addEventListener('DOMContentLoaded', function () {
	const profileBtn = document.querySelector('.user-acc__profile-btn');
	const dropDownMenu = document.querySelector('.user-acc__dropdown-menu');

	profileBtn.addEventListener('click', function (e) {
		e.stopPropagation();
		dropDownMenu.classList.toggle('active');
	});

	document.addEventListener('click', function (e) {
		if (!dropDownMenu.contains(e.target) && e.target !== profileBtn) {
			dropDownMenu.classList.remove('active');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			dropDownMenu.classList.remove('active');
		}
	});
});

document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.expand-btn').forEach(btn => {
		btn.addEventListener('click', function () {
			// Изменено с .review-card на .review__content
			const reviewText =
				this.closest('.review__content').querySelector(
					'.review__text'
				).textContent;
			const modal = document.getElementById('reviewModal');

			modal.querySelector('.full-review-text').textContent = reviewText;
			modal.style.display = 'flex';
			document.body.style.overflow = 'hidden';
		});
	});

	document.querySelector('.close-modal').addEventListener('click', function () {
		document.getElementById('reviewModal').style.display = 'none';
		document.body.style.overflow = 'auto';
	});

	document
		.getElementById('reviewModal')
		.addEventListener('click', function (e) {
			if (e.target === this) {
				this.style.display = 'none';
				document.body.style.overflow = 'auto';
			}
		});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			document.getElementById('reviewModal').style.display = 'none';
			document.body.style.overflow = 'auto';
		}
	});
});

document
	.querySelector('.navbar__menu-toggle')
	.addEventListener('click', function () {
		document.querySelector('.navbar ul').classList.toggle('active');
	});
