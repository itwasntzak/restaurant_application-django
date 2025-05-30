
import { prepMenuClosed } from "../menus/prepMenu.js";

function backButton() {
    let template = document.createElement('template');
    // chevron left
    template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>'
    let chevronLeft = template.content.firstChild;
    chevronLeft.classList.add( 'col', 'p-0' );
    // button text
    let buttonText = document.createElement('p');
    buttonText.innerHTML = 'Back';
    buttonText.classList.add( 'col', 'm-0', 'p-0' );
    // content div
    let contentDiv = document.createElement('div');
    contentDiv.classList.add( 'row', 'm-0' );
    contentDiv.append( chevronLeft, buttonText );
    // back button
    let backButton = document.createElement('button');
    backButton.type = 'button';
    backButton.classList.add( 'btn', 'text-light', 'p-0', 'pe-2' );
    backButton.appendChild(contentDiv);
    return backButton;
}

function screenHeader( labelText, buttons ) {
    // label
    let label = document.createElement('h3');
    label.innerHTML = labelText;
    label.classList.add( 'm-0', 'fw-bold' );
    let labelDiv = document.createElement('div');
    labelDiv.classList.add( 'col', 'p-0' );
    labelDiv.appendChild(label);
    // buttons div
    let buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add( 'col-auto', 'p-0' );
    buttonsDiv.appendChild( buttons )
    // main div
    let mainDiv = document.createElement('div');
    mainDiv.classList.add(
        'row', 'color-darkest', 'text-light', 'rounded-bottom-4',
        'align-items-center', 'justify-content-evenly',
        'mx-1', 'pt-5', 'pb-3', 'px-4', 'fixed-top'
    );
    mainDiv.append( labelDiv, buttonsDiv );
    return mainDiv;
}

function textInput(){
    let input = document.createElement( 'input' );
    input.type = 'text';
    input.classList.add(
        'w-100', 'rounded-pill', 'mt-3', 'py-2', 'px-3', 'data-text-input'
    );
    return input;
}

export function addNewPrepItem(  ) {
    let oldPage = Array.from(document.body.children);
    let backBtn = backButton();
    backBtn.onclick = function(){
        document.body.innerHTML = null;
        for ( let object of oldPage ){
            document.body.appendChild( object );
        }
    };
    // header
    let header = screenHeader( 'Add New Item', backBtn );
    // item name input
    let nameInput = textInput();
    nameInput.placeholder = 'Item Name';
    // item/preparation note input
    let noteInput = textInput();
    noteInput.placeholder = 'Item/Preparation Note';
    // select packaging dropdown
    let packagingDropdown = document.createElement('select');
    // for (const packaging of packagingOptionList) {
    //     packagingDropdown.add( packaging );
    // }
    // container select button
    //      open prep menu
    //      replace content with container select
    //      replace container select button with container display button

    let contentDiv = document.createElement( 'div' );
    contentDiv.append( nameInput, noteInput );
    contentDiv.classList.add( 'px-3' );
    // extra spacing for header
    let extraSpacing = document.createElement( 'div' );
    extraSpacing.classList.add( 'p-5' );

    // menu
    let appMenu = prepMenuClosed();
    let menuButton = appMenu.querySelector( '#currentMenuButton' );
    menuButton.disabled = true;

    document.body.replaceChildren(
        header,
        extraSpacing,
        contentDiv,
        // packagingDropdown
        appMenu
    )
}

// todo: add container required option