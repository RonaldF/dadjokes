const btn = document.querySelector('button');
let jokeContainer = document.querySelector('#jokes');

const newJoke = (joke) => {
  jokeContainer.innerText = joke;
};

const getDadJokes = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    newJoke(res.data.joke);
  } catch (err) {
    newJoke('No jokes found, please try again later.');
  }
};

btn.addEventListener('click', getDadJokes);
