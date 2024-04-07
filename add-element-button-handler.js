import { createSliderElement } from "./create-slider-element.js";
import { createPagination } from "./create-pagination.js";
import { paginationElementHandler } from "./pagination-element-handler.js";

const addElementButton = document.querySelector('.button__add');
const buttonSlider = document.querySelectorAll('.button-slider');
const sliderContent = document.querySelector('.slider__content');

const addElementButtonHandler = () => {
    createSliderElement()
    createPagination()

    const sliderElements = sliderContent.querySelectorAll('.slider__element');
    if (sliderElements.length === 1) {
        sliderElements[0].classList.add('slider__element--active');
    }

    const paginationElements = document.querySelectorAll('.pagination__element');
    paginationElements.forEach(element => {
        element.addEventListener('click', paginationElementHandler);

        buttonSlider.forEach((button) => {
            if (sliderContent.children.length !== 0) {
                button.disabled = false; 
            }
        });
    });

   
}

const showElementFromPaginationButtons = () => addElementButton.addEventListener('click', addElementButtonHandler);

export { showElementFromPaginationButtons }