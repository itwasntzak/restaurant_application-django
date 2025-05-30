
let template = document.createElement('template');

// icons
export let calendar = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>';
export let chevronDown = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>';
export let chevronUp = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>';
export let drumstick = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-drumstick"><path d="M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"/><path d="m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"/></svg>';
export let person = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';


function menuDrawer( leftButtonIcon, centerButton, rightButtonIcon ) {
    // side button columns
    let sideButtonCols = '<div class="col-auto text-light"></div>';
    // left button
    template.innerHTML = sideButtonCols;
    let leftButton = template.content.firstChild;
    leftButton.id = 'leftButton';
    template.innerHTML = leftButtonIcon;
    leftButton.appendChild( template.content.firstChild );
    // right button
    template.innerHTML = sideButtonCols;
    let rightButton = template.content.firstChild;
    rightButton.id = 'rightButton';
    template.innerHTML = rightButtonIcon;
    rightButton.appendChild( template.content.firstChild );
    // current menu button
    let currentMenuButton = document.createElement( 'button' );
    currentMenuButton.classList.add(  'col-auto', 'color-background', 'px-0' );
    currentMenuButton.id = 'currentMenuButton';
    currentMenuButton.appendChild( centerButton );
    // main div
    let mainDiv = document.createElement('div');
    mainDiv.id = 'appMenu';
    mainDiv.classList.add(
        'row', 'color-darkest', 'rounded-top-5',
        'align-items-center', 'justify-content-evenly',
        'mx-1', 'py-2', 'px-2', 'fixed-bottom'
    );
    mainDiv.append( leftButton, currentMenuButton, rightButton );
    return mainDiv;
}

function menuButton( currentIcon, buttonText ) {
    // menu button
    let contentRow = document.createElement( 'div' );
    contentRow.classList.add( 'row', 'align-items-center', 'my-2', 'mx-4' );
    // current icon
    template.innerHTML = currentIcon;
    let currentIconTag = template.content.firstChild;
    currentIconTag.classList.add( 'col', 'p-0' )
    contentRow.appendChild( currentIconTag );
    // button text
    let buttonTextTag = document.createElement( 'p' );
    buttonTextTag.classList.add( 'col', 'mb-1', 'px-3', 'fw-bold', 'fs-5' );
    buttonTextTag.innerHTML = buttonText;
    contentRow.appendChild( buttonTextTag );   
    return contentRow;
}

export function closeMenuButton( currentIcon, buttonText ) {
    let contentRow = menuButton( currentIcon, buttonText );
    // chevron down icon
    template.innerHTML = chevronDown;
    let downIcon = template.content.firstChild;
    downIcon.classList.add( 'col', 'p-0' );
    contentRow.appendChild( downIcon );
    return contentRow;   
}

export function openMenuButton( currentIcon, buttonText ) {
    let contentRow = menuButton( currentIcon, buttonText );
    // chevron up icon
    template.innerHTML = chevronUp;
    let upIcon = template.content.firstChild;
    upIcon.classList.add( 'col', 'p-0' );
    contentRow.appendChild( upIcon );
    return contentRow;
}

export function menuClosed( leftButtonIcon, centerButton, rightButtonIcon ) {
    let mainDiv = menuDrawer( leftButtonIcon, centerButton, rightButtonIcon );
    let currentMenuButton = mainDiv.querySelector( '#currentMenuButton' );
    currentMenuButton.classList.add( 'rounded-pill' );
    return mainDiv;
}

export function menuOpen( leftButtonIcon, centerButton, rightButtonIcon ) {
    let mainDiv = menuDrawer( leftButtonIcon, centerButton, rightButtonIcon );
    let currentMenuButton = mainDiv.querySelector( '#currentMenuButton' );
    currentMenuButton.classList.add( 'rounded-top-5' );
    let menuContent = document.createElement('div');
    menuContent.classList.add( 'color-background', 'rounded-5' );
    menuContent.id = 'menuContent';
    return mainDiv;
}

export function menuContentButton(buttonText) {
    let button = document.createElement('button');
    button.type = 'button';
    button.classList.add(
        'rounded-pill', 'color-medium', 'text-light', 'w-100', 'py-2'
    );
    button.innerHTML = buttonText;
    return button;
}

export function twoColumnButtonRow(buttonOneText, buttonTwoText) {
    // todo: change to pass in the buttons, rather than creating them here

    let columnOne = document.createElement('div');
    columnOne.classList.add('col', 'pe-2');
    let columnTwo = columnOne.cloneNode();
    columnTwo.classList.replace('pe-2', 'ps-2');
    // add buttons
    columnOne.appendChild( menuContentButton(buttonOneText) );
    columnTwo.appendChild( menuContentButton(buttonTwoText) );
    // buttons row
    let buttonRow = document.createElement('div');
    buttonRow.classList.add('row', 'mx-0', 'g-0');
    buttonRow.append( columnOne, columnTwo );
    return buttonRow;
}

export function sectionHeader(headerText) {
    let label = document.createElement('p');
    label.innerHTML = headerText + ':';
    label.classList.add('fw-semibold', 'm-0');
    let lineBrake = document.createElement('hr');
    lineBrake.classList.add('mt-1');
    let container = document.createElement('div');
    container.append( label, lineBrake );
    return container;
}
