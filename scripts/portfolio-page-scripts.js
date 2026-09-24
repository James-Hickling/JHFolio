// Opening and Closing dropdown

function openOrCloseDropdown(dropdownClicked) {

    // Defines the variables for the heading, button and button image for the dropdown clicked

    const dropdownSelected = document.querySelector(dropdownClicked);
    const dropdownHeading = document.querySelector(dropdownClicked + '-heading')
    const buttonPressed = document.querySelector(dropdownClicked + '-button');
    const dropdownImg = document.querySelector(dropdownClicked + '-img');

    // Logs the button that was pressed

    console.log(buttonPressed);

    // Checked if the dropdown is open or closed
    
    if (dropdownSelected.classList.contains('closed-dropdown')) {

        // Changes the elements of the dropdown to become open

        dropdownSelected.classList.remove('closed-dropdown');
        dropdownHeading.classList.add('opened-heading');
        buttonPressed.classList.add('opened-dropdown-button');
        dropdownImg.src = './images/global-icons/dropdown-icon-open.png'

        // Logs that the dropdown was opened

        console.log('Opened Dropdown');

    } else if (!dropdownSelected.classList.contains('closed-dropdown')) {

        // Changes the elements of the dropdown to become closed

        dropdownSelected.classList.add('closed-dropdown');
        dropdownHeading.classList.remove('opened-heading');
        buttonPressed.classList.remove('opened-dropdown-button');
        dropdownImg.src = './images/global-icons/dropdown-icon-closed.png'

        // Logs that the dropdown was closed

        console.log('Closed Dropdown');

    } else {

        // Logs that an error occurred

        console.log('Dropdown Error');

    }
}

// Copy Text 

function copyText(text) {

    // Copies the selected text
    
    navigator.clipboard.writeText(text);

    // Alerts the user that the text was copied

    alert('Copied to Clipboard');

}