import elephant from 'assets/animals/001-elephant.svg';
import { Icon } from 'types/gameTypes';
import hen from '../assets/animals/002-hen.svg';
import dolphin from '../assets/animals/005-dolphin.svg';
import parrot from '../assets/animals/006-parrot.svg';
import whale from '../assets/animals/007-whale.svg';
import snake from '../assets/animals/008-snake.svg';
import monkey from '../assets/animals/015-monkey.svg';
import fish from '../assets/animals/016-fish.svg';
import rabbit from '../assets/animals/020-rabbit.svg';
import pig from '../assets/animals/022-pig.svg';
import octopus from '../assets/animals/023-octopus.svg';
import turtle from '../assets/animals/031-turtle.svg';
import cat from '../assets/animals/033-cat.svg';
import owl from '../assets/animals/035-owl.svg';
import dog from '../assets/animals/037-dog.svg';
import sheep from '../assets/animals/038-sheep.svg';
import giraffe from '../assets/animals/039-giraffe.svg';
import penguin from '../assets/animals/045-penguin.svg';

const iconsArray = [
  {icon: elephant, value: 'elephant'},
  {icon: elephant, value: 'elephant'},
  {icon: hen, value: 'hen'},
  {icon: hen, value: 'hen'},
  {icon: dolphin, value: 'dolphin'},
  {icon: dolphin, value: 'dolphin'},
  {icon: parrot, value: 'parrot'},
  {icon: parrot, value: 'parrot'},
  {icon: whale, value: 'whale'},
  {icon: whale, value: 'whale'},
  {icon: snake, value: 'snake'},
  {icon: snake, value: 'snake'},
  {icon: monkey, value: 'monkey'},
  {icon: monkey, value: 'monkey'},
  {icon: fish, value: 'fish'},
  {icon: fish, value: 'fish'},
  {icon: rabbit, value: 'rabbit'},
  {icon: rabbit, value: 'rabbit'},
  {icon: pig, value: 'pig'},
  {icon: pig, value: 'pig'},
  {icon: octopus, value: 'octopus'},
  {icon: octopus, value: 'octopus'},
  {icon: turtle, value: 'turtle'},
  {icon: turtle, value: 'turtle'},
  {icon: cat, value: 'cat'},
  {icon: cat, value: 'cat'},
  {icon: owl, value: 'owl'},
  {icon: owl, value: 'owl'},
  {icon: dog, value: 'dog'},
  {icon: dog, value: 'dog'},
  {icon: sheep, value: 'sheep'},
  {icon: sheep, value: 'sheep'},
  {icon: giraffe, value: 'giraffe'},
  {icon: giraffe, value: 'giraffe'},
  {icon: penguin, value: 'penguin'},
  {icon: penguin, value: 'penguin'},
]

const iconsIdArray = iconsArray.reduce((red: Icon[], el, i) => {
  red.push({ ...el, id: `0${i}`, upside: false });
  return red;
}, []);

const generateNumbers = (arr: Icon[]): Icon[] => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const randomIcons = generateNumbers(iconsIdArray);

export default randomIcons;
