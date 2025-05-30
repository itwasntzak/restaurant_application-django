import * as numberTurner from '../numberTurner.js';


function collapseButton() {
    let template = document.createElement('template');
    let contentCol = '<div class="col-auto p-0 pe-1"></div>';
    // icon div
    template.innerHTML = contentCol;
    let iconCol = template.content.firstChild;
    // icon
    template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-down-up"><path d="m7 20 5-5 5 5"/><path d="m7 4 5 5 5-5"/></svg>';
    iconCol.appendChild(template.content.firstChild);
    // text div
    template.innerHTML = contentCol;
    let textCol = template.content.firstChild;
    textCol.classList.remove('pe-1')
    // text
    template.innerHTML = '<p class="m-0">Minimize</p>';
    textCol.appendChild(template.content.firstChild);
    // main div
    let mainDiv = document.createElement('div');
    mainDiv.classList.add(
        'row', 'justify-content-center', 'rounded-5', 'color-dark',
        'mx-0', 'mt-4', 'py-1', 'text-light'
    );
    mainDiv.append(iconCol, textCol);
    return mainDiv;
}

function containerSection() {
    let template = document.createElement('template');
    // container image ( place holder )
    template.innerHTML = '<div class="col-auto bg-white rounded-1 px-1 py-3 text-dark text-center"><p class="m-0">container<br>image</p></div>';
    let containerImage = template.content.firstChild;
    // container name
    template.innerHTML = '<div class="col text-light text-end"><p class="m-0"></p></div>';
    let containerName = template.content.firstChild;
    containerName.firstChild.innerHTML = 'Container Name';
    // main div
    let mainDiv = document.createElement('div');
    mainDiv.classList.add(
        'row', 'align-items-center', 'rounded-4',
        'mx-0', 'mt-3', 'ps-3', 'py-2', 'color-dark'
    );
    mainDiv.append(containerImage, containerName);
    return mainDiv;
}

function itemLabelSection() {
    let template = document.createElement('template');
    // edit button
    // button columns
    let buttonCol = '<div class="col-auto p-0 pe-2"></div>';
    // pencil icon
    template.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>';
    let pencilIcon = template.content.firstChild;
    template.innerHTML = buttonCol;
    let iconCol = template.content.firstChild;
    iconCol.appendChild(pencilIcon);
    // button text
    let buttonText = document.createElement('p');
    buttonText.classList.add('m-0');
    buttonText.innerHTML = 'Edit';
    template.innerHTML = buttonCol;
    let textCol = template.content.firstChild;
    textCol.appendChild(buttonText);

    // label text column
    template.innerHTML =
        '<div class="col"><p class="m-0 fw-bold fs-2">Item Name</p></div>';
    let labelCol = template.content.firstChild;
    // main div
    let mainDiv = document.createElement('div');
    mainDiv.classList.add(
        'row', 'rounded-5', 'color-dark', 'align-items-center',
        'mx-0', 'px-2', 'py-1',
        'text-light'
    )
    mainDiv.append( labelCol, iconCol, textCol );
    return mainDiv;
}

function prepRatioSection() {
    let template = document.createElement('template');
    // section label
    template.innerHTML = 
        '<div class="row fs-1 fw-bold"><p class="mb-0 p-0">Details</p></div>';
    let sectionLabel = template.content.firstChild;

    // content label row
    let labelRow = '<div class="row fs-2"><p class="mb-0 p-0"></p></div>';
    // package label
    template.innerHTML = labelRow;
    let packageLabel = template.content.firstChild;
    packageLabel.firstChild.innerHTML = 'Bags';
    // container label
    template.innerHTML = labelRow;
    let containerLabel = template.content.firstChild;
    containerLabel.firstChild.innerHTML = 'Buckets';

    // content data row
    let dataRow =
        '<div class="row prep-ratio-data-font"><p class="mb-0 p-0"></p></div>';
    // package data
    template.innerHTML = dataRow;
    let packageData = template.content.firstChild;
    packageData.firstChild.innerHTML = 2;
    // container data
    template.innerHTML = dataRow;
    let containerData = template.content.firstChild;
    containerData.firstChild.innerHTML = 3;

    // content columns
    let contentCol = '<div class="col p-0"></div>';
    template.innerHTML = contentCol;
    let packageCol = template.content.firstChild;
    packageCol.append( packageLabel, packageData );
    template.innerHTML = contentCol;
    let containerCol = template.content.firstChild;
    containerCol.append( containerLabel, containerData );
    // colon column
    template.innerHTML =
        '<div class="col p-0"><p class="mb-0 p-0 prep-ratio-data-font">:</p></div>';
    let colonCol = template.content.firstChild;
    // content row
    let contentRow = document.createElement('div');
    contentRow.classList.add( 'row', 'align-items-end' );
    contentRow.append( packageCol, colonCol, containerCol );

    // main div
    let mainDiv = document.createElement('div');
    mainDiv.classList.add(
        'color-dark', 'rounded-5',
        'mt-4', 'px-5', 'py-3',
        'text-light', 'text-center'
    );
    mainDiv.append( sectionLabel, contentRow );
    return mainDiv;
}

function prepListItemExpanded() {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add( 'm-3', 'p-4', 'color-medium', 'rounded-5' );
    mainDiv.append(
        itemLabelSection(),
        numberTurner.numberTurnerCard( 'Needed', 'Front', 3, 'Back', 4 ),
        prepRatioSection(),
        containerSection(),
        collapseButton()
    );
    return mainDiv;
}

document.body.prepend( prepListItemExpanded(), prepListItemExpanded() );