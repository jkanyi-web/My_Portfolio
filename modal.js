const card1 = {
  title1: 'BudgetBuddy App',
  title: 'Budget App',
  techList: ['html', 'Bootstrap', 'Ruby on rails', 'PostgreSQL', 'Railway'],
  description: `This is a Ruby on Rails application that allows the user to: register and log in, so that the data is private to them, introduce new transactions associated with a category and see the money spent on each category.`,
  link: [
    'https://budgetbuddy-production.up.railway.app/',
    'https://github.com/jkanyi-web/BudgetBuddy',
  ],
  lilDescription: 'This is a Ruby on Rails application that allows the user to: register and log in, so that the data is private to them, introduce new transactions associated with a category and see the money spent on each category.',
  image: 'images/card1.png',
  backgroundImage: 'images/BudgetBuddy.png',
};

const card2 = {
  title1: 'Veejayz-Gen-Store',
  title: 'Veejayz-Gen-Store',
  techList: ['React', 'Bootstrap', 'Redux'],
  description: `This React capstone project is about building a mobile web application to check a list of metrics (numeric values) that you will create making use of React and Redux`,
  link: [
    'https://frabjous-melomakarona-d24e59.netlify.app/',
    'https://github.com/jkanyi-web/veejayz-gen-store',
  ],
  lilDescription: 'This React capstone project is about building a mobile web application to check a list of metrics (numeric values) that you will create making use of React and Redux',
  image: 'images/card2.png',
  backgroundImage: 'images/card2.png',

};

const card3 = {
  title1: 'Math-Magicians',
  title: 'Math-Magicians',
  techList: ['React', 'Redux'],
  description: `"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote. By building this application, you will learn how to use React`,
  link: [
    'https://mathmagicians-jkanyi-web.netlify.app',
    'https://github.com/jkanyi-web/math-magicians-redo-cra',
  ],
  lilDescription: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote. By building this application, you will learn how to use React',
  image: 'images/mathmagicians.PNG',
  backgroundImage: 'images/mathmagicians.PNG',
};

const card4 = {
  title1: 'Book Store',
  title: 'Book Store',
  techList: ['React', 'Redux'],
  description: `The React and Redux Bookstore app allows users to display a list of books, add a book and remove a selected book`,
  link: [
    'https://bookstore-jkanyi-web.netlify.app/',
    'https://github.com/jkanyi-web/bookstore-redo-cra',
  ],
  lilDescription: 'The React and Redux Bookstore app allows users to display a list of books, add a book and remove a selected book',
  image: 'images/bookstore.PNG',
  backgroundImage: 'images/bookstore.PNG',
};

const card5 = {
  title1: 'Professional Art Printing Data',
  title: 'Keeping track of hundreds  of components website',
  techList: ['html', 'Bootstrap', 'Ruby on rails'],
  description: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essent'`,
  link: [
    'https://github.com/jkanyi-web/Microverse_Portfolio',
    'https://github.com/jkanyi-web/',
  ],
  lilDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  image: 'images/card2.png',
};

const card6 = {
  title1: 'Professional Art Printing Data ',
  title: 'Keeping track of hundreds  of components website',
  techList: ['html', 'Bootstrap', 'Ruby on rails'],
  description: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but also the leap into electronic
      typesetting, remaining essent'`,
  link: [
    'https://github.com/jkanyi-web/Microverse_Portfolio',
    'https://github.com/jkanyi-web/',
  ],
  lilDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  image: 'images/card2.png',
};

const projects = [card1, card2, card3, card4, card5, card6];

const body = document.querySelector('body');
const article = document.createElement('article');
article.className = 'card-container invisible';
article.setAttribute('id', 'card');
article.innerHTML = `
    <div class="card">
      <i id="card-cross" class="fas fa-times card-cross" onclick="toggle()"></i>
      <h3 id="card-title">See Project header</h3>
      <ul id="tech-list" class="tech">
      </ul>
      <div class="popupFooter">
        <img src="images/card1" class="card-image" alt="project screenshot">
        <iframe src="" frameborder="0" class="card-iframe invisible"></iframe>
        

        <div class="functionality">
          <p id="card-description">
          </p>
          <div class="button-container">
            <button type="button" id="card-button-live" class="card-button">
                See live
              <i class="fas fa-external-link-alt"></i>
            </button>
            <button type="button" id="card-button-source" class="card-button">
              See source
              <i class="fab fa-github"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
`;
body.appendChild(article);

const stories = document.querySelector('#recent');
const article1 = document.createElement('section');
article1.className = 'recent-works-words1';
article1.setAttribute('id', 'recent-works');
article1.innerHTML = `
    <img class="bgimage" src="images/BudgetBuddy.png" alt="My recent works" />
    <article class="stories-words">
        <h3 class="Stories">BudgetBuddy App</h3>
        <p class="work-words">
            This is a Ruby on Rails application that allows the user to: register and log in, so that the data is private to them, introduce new transactions associated with a category and see the money spent on each category.
        </p>

        <ul class="languages">
            <li class="language-icons">
            <a href="#"><img src="images/css.png" alt="css" /></a>
            </li>
            <li class="language-icons">
            <a href="#"><img src="images/html.png" alt="html" /></a>
            </li>
            <li class="language-icons">
            <a href="#"><img src="images/bootstrap.png" alt="bootstrap" /></a>
            </li>
            <li class="language-icons">
            <a href="#"><img src="images/ruby.png" alt="ruby" /></a>
            </li>
            <br />
        </ul>

        <div class=buttonlink onclick="modal(0)">
            <button class="button">See Project</button>
        </div>
    </article> 
`;
stories.appendChild(article1);

for (let i = 0; i < projects.length; i += 1) {
  const proCard = document.querySelector('#proCard');
  const prof = document.createElement('section');
  prof.className = 'Professional';
  prof.style.backgroundImage = `url(${projects[i].backgroundImage})`;
  prof.innerHTML = `
      <h3 class="heading5">${projects[i].title1}</h3>

      <div class=buttonlink onclick="modal(${i})">
        <button class="button2">See Project</button>
      </div>
  `;
  proCard.appendChild(prof);
}

function modal(number) {
  const card = document.querySelector('#card');
  card.classList.toggle('invisible');
  const title = document.querySelector('#card-title');

  const img = document.querySelector('.card-image');
  const desc = document.querySelector('#card-description');
  const techList = document.querySelector('#tech-list');
  techList.innerHTML = '';
  const buttonsrc = document.querySelector('#card-button-source');
  const buttonlive = document.querySelector('#card-button-live');
  title.innerHTML = projects[number].title;

  img.setAttribute('src', projects[number].image);
  for (let i = 0; i < projects[number].techList.length; i += 1) {
    const li = document.createElement('li');
    li.textContent = projects[number].techList[i];
    techList.appendChild(li);
  }
  desc.innerHTML = projects[number].description;
  buttonsrc.setAttribute(
    'onclick',
    `window.open("${projects[number].link[1]}", "_blank");`,
  );
  buttonlive.setAttribute(
    'onclick',
    `window.open("${projects[number].link[0]}", "_blank");`,
  );
}
function toggle() {
  const card = document.querySelector('#card');
  card.classList.toggle('invisible');
}
toggle();
modal();
