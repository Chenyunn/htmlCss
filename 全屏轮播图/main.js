const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

const nextSlide = function(){
	const current = document.querySelector('.current')
	if(current.nextElementSibling){
		current.nextElementSibling.classList.add('current')
	}else{
		slides[0].classList.add('current')
	}
	
	setTimeout(()=>{
		current.classList.remove('current')
	})
}


const prevSlide = function(){
	const current = document.querySelector('.current')
	if(current.previousElementSibling){
		current.previousElementSibling.classList.add('current')
	}else{
		slides[slides.length - 1].classList.add('current')
	}
	
	setTimeout(()=>{
		current.classList.remove('current')
	})
}

//button event
next.addEventListener('click',function(){
	nextSlide()
})

prev.addEventListener('click',function(){
	prevSlide()
})