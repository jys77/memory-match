import { data, levels } from '../constants';

export const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export const getImages = (level = 'easy') => {
  let randomData = shuffle(data);
  const dataNum = Math.floor(data.length / levels[level]);
  const selectedData = randomData.slice(0, dataNum);
  const dataMap = selectedData.map((item) => {
    return {
      name: item,
      imagePath: `images/${item}.png`,
    };
  });
  return shuffle([...shuffle(dataMap), ...shuffle(dataMap)]).map((item, id) => {
    return {
      name: item.name,
      imagePath: item.imagePath,
      id: id + 1,
    };
  });
};

export const isMatched = (one, two) => {
  if (one && two) {
    if (one.name === two.name && one.id !== two.id) {
      return true;
    }
  }
  return false;
};
