
export function prepListItemCollapsed(itemName='Item Name', prepData=0, haveData=0) {
    function infoCol(label, data) {
        let template = document.createElement('template');
        let pString = '<p class="m-0"></p>';
        // label
        template.innerHTML =
            `<div class="row font-medium fw-light">${pString}</div>`;
        let infoLabel = template.content.firstChild;
        infoLabel.firstChild.innerHTML = label;
        // data
        template.innerHTML =
            `<div class="row font-large fw-semibold">${pString}</div>`;
        let infoData = template.content.firstChild;
        infoData.firstChild.innerHTML = data;
        // column
        let column = document.createElement('div');
        column.classList.add('col-auto', 'my-0');
        column.appendChild(infoLabel);
        column.appendChild(infoData);
        return column;
    }

    // info section
    // info row
    let infoRow = document.createElement('div');
    infoRow.classList.add('row', 'justify-content-end');
    // prep
    infoRow.appendChild(infoCol('Prep', prepData));
    // have
    infoRow.appendChild(infoCol('Have', haveData));
    // info column
    let infoColumn = document.createElement('div');
    infoColumn.classList.add('col-auto', 'pe-3', 'py-2',
                             'text-light', 'text-center');
    infoColumn.appendChild(infoRow);

    // item name section
    let itemNameP = document.createElement('p');
    itemNameP.classList.add('fw-bold', 'text-light', 'font-large');
    itemNameP.innerHTML = itemName;
    // item name column
    let itemNameCol = document.createElement('div');
    // itemNameCol.classList.add('col', 'ps-3', 'pt-2', 'pb-4',
    itemNameCol.classList.add('col', 'ps-3', 'pt-1',
                              'rounded-4', 'color-dark');
    itemNameCol.appendChild(itemNameP);

    // container row
    let containerRow = document.createElement('div');
    containerRow.classList.add('row', 'my-2', 'mx-4', 'bg-danger', 'rounded-4');
    containerRow.appendChild(itemNameCol);
    containerRow.appendChild(infoColumn);

    return containerRow;
}