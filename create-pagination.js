const paginationContainer = document.querySelector('.pagination');

let count = 0;

const createPagination = () => {
    count++
    const createPaginationElement = document.createElement('button');
    createPaginationElement.textContent = count;
    createPaginationElement.classList.add('pagination__element')
    paginationContainer.append(createPaginationElement)
}

export { createPagination }



