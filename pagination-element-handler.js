const paginationElementHandler = (event) => {
    const id = event.target.textContent;
    const sliderElements = document.querySelectorAll('.slider__element');
    sliderElements.forEach(element => {
        element.classList.remove('slider__element--active')
    })

    const targetSliderElement = document.getElementById(`slider-element-${id}`);
    if (targetSliderElement) {
        targetSliderElement.classList.add('slider__element--active');
    }
}

export { paginationElementHandler }