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

const translate = (str)=>{
  const lowerCaseStr = str.toLowerCase();
  const wordsArray = lowerCaseStr.split(' '); //город  утка
  const wordsTranslatedArray = wordsArray.map((word)=>{
    if(dictionary.has(word)){
      return dictionary.get(word);
    }
    return word;
  });
  const translatedStr = wordsTranslatedArray.join(' ');
  return translatedStr;
}

console.log(translate(str))


