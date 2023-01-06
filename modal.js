const card1 = {
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
  image: 'images/card1.png',
};

const card2 = {
  title1: 'Professional Art Printing Data',
  title: 'Multi Post Stories',
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

const card3 = {
  title1: 'Professional Art Printing Data',
  title: 'Multi Post Stories',
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

const card4 = {
  title1: 'Professional Art Printing Data',
  title: 'Multi Post Stories',
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

const card5 = {
  title1: 'Professional Art Printing Data',
  title: 'Multi Post Stories',
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
  title: 'Multi Post Stories',
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
    <img class="bgimage" src="images/Placeholder.png" alt="My recent works" />
    <article class="stories-words">
        <h3 class="Stories">Multi-Post Stories</h3>
        <p class="work-words">
            A daily selection of privately personalized reads; no accounts or sign-ups
            required. has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a standard dummy text.
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
  prof.innerHTML = `
      <h3 class="heading5">${projects[i].title1}</h3>
      <p class="art-words">
        ${projects[i].lilDescription}
      </p>
      <ul class="f-item">
        <li>
          <a class="icon2" href="#"><img src="images/html1.png" alt="html" /></a>
        </li>
        <li>
          <a class="icon2" href="#"><img src="images/bootstrap1.png" alt="bootstrap" /></a>
        </li>
        <li>
          <a class="icon2" href="#"><img src="images/ruby1.png" alt="ruby" /></a>
        </li>
      </ul>

      <div class=buttonlink onclick="modal(1)">
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
