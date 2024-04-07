const sliderContent = document.querySelector('.slider__content');

let count = 0;

const createSliderElement = () => {
    count++
    const createElement = document.createElement('div');
    createElement.classList.add("slider__element")
    createElement.setAttribute('id', `slider-element-${count}`)
    const createTextElement = document.createElement('span');
    createTextElement.textContent = `${count}`
    createTextElement.classList.add("slider__text")
    createElement.append(createTextElement)
    sliderContent.append(createElement)
}

export { createSliderElement }