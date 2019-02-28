const sortSelectContainer = document.getElementById('sort-select');



export default function loadSort(callback) {
    sortSelectContainer.addEventListener('change', () => {
        const sortSelected = { property: sortSelectContainer.value };
        callback(sortSelected);
    });
}

