function numberTurner(value=0) {
    let template = document.createElement('template');
    // turner (main div)
    template.innerHTML =
        '<div class="fw-semibold mx-3 row rounded-pill number-turner color-background"></div>';
    let turner = template.content.firstChild;
    // number (center div)
    template.innerHTML =
        '<div class="col p-0"><p class="m-0"></p></div>';
    let number = template.content.firstChild;
    // minus (left div)
    let sideDivs =
        '<div class="col py-0 px-4"><p class="m-0"></p></div>';
    template.innerHTML = sideDivs;
    let minus = template.content.firstChild;
    minus.firstChild.innerHTML = '-';
    // plus (right div)
    template.innerHTML = sideDivs;
    let plus = template.content.firstChild;
    plus.firstChild.innerHTML = '+';
    
    number.firstChild.innerHTML = value;
    minus.addEventListener("click", function(){
        value -= 1;
        number.firstChild.innerHTML = value;
    })
    plus.addEventListener("click", function(){
        value += 1;
        number.firstChild.innerHTML = value;
    })

    turner.append(minus, number, plus);
    return turner;
};

// todo: add parameters for turner labels
export function numberTurnerCard(cardLabel='Label',
                                 turnerOneLabel='Label', turnerOneValue=0,
                                 turnerTwoLabel='Label', turnerTwoValue=0) {
    let template = document.createElement('template');
    let htmlString =
        '<div><label class="pt-3 fs-2 fw-light text-light"></label></div>';

    // // number turner 1
    let firstNumberTurner = numberTurner(turnerOneValue);
    firstNumberTurner.id = 'number-turner-1';
    template.innerHTML = htmlString;
    let firstNumberDiv = template.content.firstChild;
    firstNumberDiv.firstChild.innerHTML = turnerOneLabel;
    firstNumberDiv.firstChild.id = 'number-turner-1-label';
    firstNumberDiv.firstChild.htmlFor = 'number-turner-1';
    firstNumberDiv.appendChild(firstNumberTurner);

    // number turner 2
    let secondNumberTurner = numberTurner(turnerTwoValue);
    secondNumberTurner.id = 'number-turner-2';
    secondNumberTurner.classList.add('mb-2');
    template.innerHTML = htmlString;
    let secondNumberDiv = template.content.firstChild;
    secondNumberDiv.firstChild.innerHTML = turnerTwoLabel;
    secondNumberDiv.firstChild.id = 'number-turner-2-label';
    secondNumberDiv.firstChild.htmlFor = 'number-turner-2';
    secondNumberDiv.appendChild(secondNumberTurner);

    // card label
    let mainLabel = document.createElement('p');
    mainLabel.id = 'card-label';
    mainLabel.classList.add('m-0');
    mainLabel.innerHTML = cardLabel;
    mainLabel.classList.add('fs-3', 'fw-bold', 'text-light');
    // card div
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('mt-4', 'px-2', 'py-3', 'text-center',
                          'rounded-5', 'color-dark');
    cardDiv.append(mainLabel, firstNumberDiv, secondNumberDiv);
    return cardDiv;
};