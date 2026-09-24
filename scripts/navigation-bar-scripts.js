// Defines the Iframe as variable

const iframe = document.getElementById('page');

// Event to check if Iframe height is changed

iframe.addEventListener('load', function() {

    // Defines the Iframe content as a variable

    const iframeContent = iframe.contentWindow.document.body;

    // Creates an observer to check for changes in height, then changes it

    const heightObserver = new ResizeObserver((entries) => {

        for (let entry of entries) {

            const newHeight = entry.target.scrollHeight + 42.6666;
            iframe.style.height = newHeight + 'px';

            console.log(newHeight);

        }

    });

    heightObserver.observe(iframeContent);

});



// Function to change Iframe

function changeIframe(page) {

    // Defines the new page that the iframe will be changed to

    const newPage = page;

    // Changes the iframe's source to the new page

    window.parent.document.getElementById("page").src = newPage;

    // Logs the change

    console.log(newPage);
}

// Function to change the background of icon to indictate selection

function selectIcon(icon) {

    // Defines the variables to remove the selected class from one icon and give it to the clicked icon

    const iconClass = icon;
    const iconAdded = document.querySelector(iconClass);
    const iconRemoved = document.querySelector('.selected-icon');

    // Removes the selected class from the prior icon and adds it to the clicked icon

    iconRemoved.classList.remove('selected-icon');
    iconAdded.classList.add('selected-icon');

    // Logs the where the changes occured

    console.log(iconAdded);
    console.log(iconRemoved);
}