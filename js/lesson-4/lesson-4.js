//TODO:=========task-01=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const section = document.querySelector('section');
const boxes = 100;
const divContainer = document.createElement('div');
divContainer.classList.add('number-container');

const randomNumber = () => Math.floor(Math.random() * boxes) + 1;

// const fragment = document.createDocumentFragment();

for (let i = 0; i < boxes; i++) {
  const div = document.createElement('div');
  div.classList.add('number');

  div.textContent = randomNumber();

  div.textContent % 2 === 0
    ? div.classList.add('even')
    : div.classList.add('odd');

  //   fragment.appendChild(div);

  divContainer.appendChild(div);
}

section.append(divContainer);

// section.prepend(divContainer)
// section.after(divContainer)
// section.before(divContainer)

// section.innerHTML = toString(divContainer);
// section.insertAdjacentHTML('beforeend', divContainer)

// console.log(divContainer);

//TODO:=========task-02=================

const films = [
  {
    title: 'Tetris',
    imgUrl: 'https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg',
    id: 'film_1',
  },
  {
    title: 'Avatar: The Way of Water',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg',
    id: 'film_2',
  },
  {
    title: 'Operation Fortune: Ruse de guerre',
    imgUrl: 'https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg',
    id: 'film_3',
  },
  {
    title: 'Babylon',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg',
    id: 'film_4',
  },
  {
    title: 'The Whale',
    imgUrl: 'https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg',
    id: 'film_5',
  },
];

// Приклад елементу списку
{
  /* <li id="${id}">
     <img src="${imgUrl}" alt="${title}" />
     <p>${title}</p>
</li> */
}

const filmsList = document.querySelector('.films-list');

function createMarkup(arr) {
  return arr
    .map(
      item =>
        `<li id="${item.id}">
     <img src="${item.imgUrl}" alt="${item.title}" />
     <p>${item.title}</p>
    </li> `
    )
    .join('');
}

// filmsList.innerHTML = createMarkup(films);
filmsList.insertAdjacentHTML('beforeend', createMarkup(films));

//
//
