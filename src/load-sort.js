const sortSelectContainer = document.getElementById('sort-select');



export default function loadSort() {
    sortSelectContainer.addEventListener('change', () => {
        const sortSelected = { property: sortSelectContainer.value };
        console.log(sortSelected);
    });
}

