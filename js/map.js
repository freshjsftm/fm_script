'use strict';

const obj = {
  prop: 123,
}

const dictionary = new Map();
dictionary.set('собака','dog');
dictionary.set('кот','cat');
dictionary.set('утка','duck');
dictionary.set('брат','brother');
dictionary.set('сестра','sister');
dictionary.set('дочь','daughter');
dictionary.set('небо','sky');
dictionary.set('город','town');
dictionary.set('дорога','road');
dictionary.set('язык','language');
dictionary.set('бросать','throw');
dictionary.set('брать','throw');
dictionary.set('смотреть','watch');
dictionary.set('говорить','talk');
dictionary.set('давече','daveche');

const str = 'Город утка Плов давече Цукерберг смотреть Дочь дорога брать сестра кот';

const translate = (dictionary, str, separator = ' ')=>{
  return str.toLowerCase()
            .split(separator)
            .map((word)=> (dictionary.has(word) ? dictionary.get(word):word))
            .join(separator);
}

//console.log(translate(dictionary, str))


//const iteratorKeys = dictionary.keys();
const keysArray = [...dictionary.keys()];
// for (const iterator of dictionary.keys() ) {
//   keysArray.push(iterator)
// }

//const iteratorValues = dictionary.values();
const valuesArray = [...dictionary.values()];
// for (const iterator of dictionary.values() ) {
//   valuesArray.push(iterator)
// }


