// Function to navigate to the previous page
function goBack() {
    const currentPage = document.querySelector('.page.active');
    const prevPage = currentPage.previousElementSibling;
    if (prevPage && prevPage.classList.contains('page')) {
        currentPage.classList.remove('active');
        prevPage.classList.add('active');
        checkFooterVisibility();
    }
}

// Function to navigate to a specific page
function goToPage(pageId, imgSrc) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        if (pageId === 'page-3' && imgSrc) {
            document.getElementById('fullScreenImg').src = imgSrc;
        }
        checkFooterVisibility();
    }
}

// Function to navigate to the next page
function nextPage(element) {
    const currentPage = element.closest('.page');
    const nextPage = currentPage.nextElementSibling;
    if (nextPage && nextPage.classList.contains('page')) {
        currentPage.classList.remove('active');
        nextPage.classList.add('active');
        checkFooterVisibility();
    }
}

// Function to create card elements dynamically
function createCards(containerId, imageUrls, count, cardText, startNumber, pageId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing cards
    for (let i = 0; i < count; i++) {
        const imageUrl = imageUrls[i % imageUrls.length]; // Use modulo to loop through image URLs
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${imageUrl}" class="card-img-top" alt="${startNumber + i}" onclick="goToPage('${pageId}', '${imageUrl}')">
            <div class="card-body">
                <p class="card-text">${cardText} ${startNumber + i}</p>
            </div>
        `;
        container.appendChild(card);
    }
}

// Function to check the visibility of the footer
function checkFooterVisibility() {
    const footer = document.getElementById('footer');
    if (document.querySelector('.page.active')) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
}

// Define image URLs for pages
const imagesPage1 = ['images/1.jpeg', 'images/2.jpeg', 'images/3.jpeg','images/4.jpeg', 'images/5.jpeg','images/6.jpeg', 'images/7.jpeg', 'images/8.jpeg','images/9.jpeg', 'images/10.jpeg',
    'images/11.jpeg', 'images/12.jpeg', 'images/13.jpeg','images/14.jpeg', 'images/15.jpeg','images/16.jpeg', 'images/17.jpeg', 'images/18.jpeg','images/19.jpeg', 'images/20.jpeg',
    'images/21.jpeg', 'images/22.jpeg', 'images/23.jpeg','images/24.jpeg', 'images/25.jpeg','images/26.jpeg', 'images/27.jpeg', 'images/28.jpeg','images/29.jpeg', 'images/30.jpeg',];
const imagesPage2 = ['images/(1).jpeg', 'images/(2).jpeg', 'images/(3).jpeg','images/(4).jpeg', 'images/(5).jpeg','images/(6).jpeg', 'images/(7).jpeg', 'images/(8).jpeg','images/(9).jpeg', 'images/(10).jpeg',
    'images/(11).jpeg', 'images/(12).jpeg', 'images/(13).jpeg', 'images/(14).jpeg', 'images/(15).jpeg','images/(16).jpeg', 'images/(17).jpeg', 'images/(18).jpeg', 'images/(19).jpeg', 'images/(20).jpeg',
    'images/(21).jpeg', 'images/(22).jpeg', 'images/(23).jpeg', 'images/(24).jpeg', 'images/(25).jpeg','images/(26).jpeg', 'images/(27).jpeg', 'images/(28).jpeg', 'images/(29).jpeg', 'images/(30).jpeg',
    'images/(31).jpeg', 'images/(32).jpeg', 'images/(33).jpeg', 'images/(34).jpeg', 'images/(35).jpeg','images/(36).jpeg', 'images/(37).jpeg', 'images/(38).jpeg', 'images/(39).jpeg', 'images/(40).jpeg',
    'images/(41).jpeg', 'images/(42).jpeg', 'images/(43).jpeg', 'images/(44).jpeg', 'images/(45).jpeg','images/(46).jpeg', 'images/(47).jpeg', 'images/(48).jpeg', 'images/(49).jpeg', 'images/(50).jpeg',
    'images/(1).jpeg',  'images/(2).jpeg',  'images/(3).jpeg',  'images/(4).jpeg',  'images/(5).jpeg', 'images/(6).jpeg',  'images/(7).jpeg',  'images/(8).jpeg',  'images/(9).jpeg',  'images/(10).jpeg',
    'images/(11).jpeg', 'images/(12).jpeg', 'images/(13).jpeg', 'images/(14).jpeg', 'images/(15).jpeg','images/(16).jpeg', 'images/(17).jpeg', 'images/(18).jpeg', 'images/(19).jpeg', 'images/(20).jpeg',
    'images/(21).jpeg', 'images/(22).jpeg', 'images/(23).jpeg', 'images/(24).jpeg', 'images/(25).jpeg','images/(26).jpeg', 'images/(27).jpeg', 'images/(28).jpeg', 'images/(29).jpeg', 'images/(30).jpeg',
    'images/(31).jpeg', 'images/(32).jpeg', 'images/(33).jpeg', 'images/(34).jpeg', 'images/(35).jpeg','images/(36).jpeg', 'images/(37).jpeg', 'images/(38).jpeg', 'images/(39).jpeg', 'images/(40).jpeg',
    'images/(41).jpeg', 'images/(42).jpeg', 'images/(43).jpeg', 'images/(44).jpeg', 'images/(45).jpeg','images/(46).jpeg', 'images/(47).jpeg', 'images/(48).jpeg', 'images/(49).jpeg', 'images/(50).jpeg',];
    
// Initialize cards
createCards('card-container-1', imagesPage1, 30, 'Generation', 1, 'page-2');
createCards('card-container-2', imagesPage2, 100, 'No.', 1, 'page-3');

// Check footer visibility on scroll
window.onscroll = function() {
    const footer = document.getElementById('footer');
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
};
checkFooterVisibility();
