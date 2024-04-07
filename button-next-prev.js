const buttonSlider = document.querySelectorAll('.button-slider');
const sliderContent = document.querySelector('.slider__content');


const checkActiveSlider = () => {
    const sliderElements = sliderContent.querySelectorAll('.slider__element');
    let currentElement;
    sliderElements.forEach((element) => {
        if (element.classList.contains('slider__element--active')) {
            currentElement = element.id
        }
    })
    return currentElement
}

buttonSlider.forEach((button) => {
    if (sliderContent.children.length === 0) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
});

const buttonSliderNextPrevHandler = () => {
    buttonSlider.forEach((button) => {

        button.addEventListener('click', (evt) => {
            const sliderElements = sliderContent.querySelectorAll('.slider__element');
            const activeSliderId = checkActiveSlider();
            const activeSliderIndex = Array.from(sliderElements).findIndex((element) => element.id === activeSliderId);
            console.log(activeSliderIndex)

            if (evt.target.id === 'next') {
                const afterActiveSliderIndex = (activeSliderIndex + 1) % sliderElements.length;
                sliderElements[activeSliderIndex].classList.remove('slider__element--active');
                sliderElements[afterActiveSliderIndex].classList.add('slider__element--active');

            }
            if (evt.target.id === 'prev') {
                const beforeActiveSliderIndex = (activeSliderIndex - 1 + sliderElements.length) % sliderElements.length;
                sliderElements[activeSliderIndex].classList.remove('slider__element--active');
                sliderElements[beforeActiveSliderIndex].classList.add('slider__element--active');
            }
        })
    })
}

export { buttonSliderNextPrevHandler }



