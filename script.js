const aircraft1 = document.getElementById('aircraft-1');
const aircraft2 = document.getElementById('aircraft-2');
const aircraft3 = document.getElementById('aircraft-3');

window.addEventListener('scroll', () => {
	let offset = window.pageYOffset;
	aircraft1.style.top = 20 + offset * 0.2 + 'px';
	aircraft2.style.top = 220 + offset * 0.2 + 'px';
	aircraft3.style.top = 420 + offset * 0.2 + 'px';
});
