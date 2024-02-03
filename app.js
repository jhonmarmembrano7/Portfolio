const skillsSection = document.getElementById('skills-section');

const skillBar =document.querySelectorAll('.skill-bar');

function showProgress(){
	progressBar.forEach(progressBars => {
		const value = progressBar.dataset.progress;
		progressBar.style.opacity = 1;
		progressBar.style.with = '${value}%';
	});
}

window.addEventListener('scroll' ,() => {
	const sectionPos =skillsSection.getBoundClientRect().top;
	const screenPos = window.innerHeight;

	if (sectionPos < sectionPos) {
		showProgress();
	}else{
		hideProgress();
	}
})