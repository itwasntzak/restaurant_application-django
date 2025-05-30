import * as menuFile from "./menu.js";
import { addNewPrepItem } from "../preparation/addPrepItem.js";

function filterSection() {
    // section header
    let header = menuFile.sectionHeader('Filter');
    // search bar
    let searchBar = document.createElement('input');
    searchBar.type = 'text';
    searchBar.name = 'prep-menu-search';
    searchBar.classList.add('search-bar-input', 'rounded-5', 'color-light');
    searchBar.placeholder = 'Search Item';
    let searchLabel = document.createElement('label');
    searchLabel.classList.add('search-bar-label', 'mb-3');
    searchLabel.appendChild(searchBar);
    // filter buttons
    let buttonRow = menuFile.twoColumnButtonRow( 'Needed Front', 'Needed Back' );
    // main div
    let mainDiv = document.createElement('div');
    mainDiv.id = 'filterSection';
    mainDiv.append( header, searchLabel, buttonRow );
    return mainDiv;
}

function sortSection() {
    // section header
    let header = menuFile.sectionHeader('Sort By');
    // sort buttons
    let buttonRow = menuFile.twoColumnButtonRow( 'Name', 'Priority' );
    // main div
    let mainDiv = document.createElement('div');
    mainDiv.id = 'sortSection';
    mainDiv.classList.add('pt-3');
    mainDiv.append( header, buttonRow );
    return mainDiv;
}

function actionSection() {
    // section header
    let header = menuFile.sectionHeader('Actions');
    // add item button
    let addItemButton = menuFile.menuContentButton('Add Item');
    addItemButton.classList.add('mb-3');
    addItemButton.onclick = addNewPrepItem;
    // container buttons
    let buttonRow = menuFile.twoColumnButtonRow(
        'Add Container', 'Edit Container'
    );
    // main div
    let mainDiv = document.createElement('div');
    mainDiv.id = 'actionSection';
    mainDiv.classList.add('pt-3');
    mainDiv.append( header, addItemButton, buttonRow );
    return mainDiv;
}

function prepMenuOpen() {
    // main menu content
    let menuContent = document.createElement('div');
    menuContent.classList.add(
        'color-background', 'rounded-4', 'pt-2', 'pb-3', 'px-3'
    );
    menuContent.append( filterSection(), sortSection(), actionSection() );
    // menu div
    let menu = menuFile.menuOpen(
        menuFile.calendar,
        menuFile.closeMenuButton( menuFile.drumstick, 'Prep' ),
        menuFile.person
    );
    menu.appendChild(menuContent);
    // menu button event listeners
    let leftButton = menu.querySelector( '#leftButton' );
    leftButton.addEventListener( 'click', () => {
        window.location.replace( '' );
    });
    let rightButton = menu.querySelector( '#rightButton' );
    rightButton.addEventListener( 'click', () => {
        window.location.replace( '' );
    });
    let prepMenuButton = menu.querySelector( '#currentMenuButton' );
    prepMenuButton.addEventListener( 'click', () => {
        menu.replaceWith(prepMenuClosed(
            menuFile.calendar,
            menuFile.openMenuButton( menuFile.drumstick, 'Prep' ),
            menuFile.person
        ))
    });
    return menu;
}

export function prepMenuClosed() {
    let menu = menuFile.menuClosed(
        menuFile.calendar,
        menuFile.openMenuButton( menuFile.drumstick, 'Prep' ),
        menuFile.person
    );
    let leftButton = menu.querySelector( '#leftButton' );
    leftButton.addEventListener( 'click', () => {
        window.location.replace( '' );
    });
    let rightButton = menu.querySelector( '#rightButton' );
    rightButton.addEventListener( 'click', () => {
        window.location.replace( '' );
    });
    let prepMenuButton = menu.querySelector( '#currentMenuButton' );
    prepMenuButton.addEventListener( 'click', () => {
        menu.replaceWith(prepMenuOpen(
            menuFile.calendar,
            menuFile.closeMenuButton( menuFile.drumstick, 'Prep' ),
            menuFile.person
        ))
    });
    return menu;
}

document.body.prepend( prepMenuClosed() );