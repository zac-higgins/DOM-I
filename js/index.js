const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Adding text to nav
let navAnchors = document.querySelectorAll('a');
navAnchors[0].textContent = "Services";
navAnchors[1].textContent = "Product";
navAnchors[2].textContent = "Vision";
navAnchors[3].textContent = "Features";
navAnchors[4].textContent = "About";
navAnchors[5].textContent = "Contact";

//cta section
let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.style.whiteSpace = 'pre';
ctaH1.textContent = 'dom\n is\n Awesome';

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = "Get Started";

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//main-content
let mainContentHeadings = document.querySelectorAll('.main-content h4');
mainContentHeadings[0].textContent = "Features";
mainContentHeadings[1].textContent = "About";
mainContentHeadings[2].textContent = "Services";
mainContentHeadings[3].textContent = "Product";
mainContentHeadings[4].textContent = "Vision";

let mainContentParagraphs = document.querySelectorAll('.main-content p');
mainContentParagraphs[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentParagraphs[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentParagraphs[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentParagraphs[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentParagraphs[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//main-content image
let mainContentImage = document.getElementById('middle-img');
mainContentImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = "Contact";

let contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = "123 Way 456 Street Somewhere, USA";
contactP[1].textContent = "1 (888) 888-8888";
contactP[2].textContent = "sales@greatidea.io";

let footer = document.querySelector('footer p');

footer.textContent = "Copyright Great Idea! 2018";