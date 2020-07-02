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

export const transTime = (time) => {
  if (time === 0) {
    return 'N/A';
  }
  return `${String(Math.floor(time / 60)).padStart(2, '0')}:${String(time & 60).padStart(2, '0')}`;
};

export const smoothScrollDownToRef = (ref) => {
  const goToRef = () => {
    let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    currentPosition += 3;
    if (currentPosition < ref.current.offsetTop - 100) {
      window.scrollTo(0, currentPosition);
    } else {
      window.scrollTo(0, ref.current.offsetTop - 100);
      clearInterval(timer);
      timer = null;
    }
  };
  let timer = setInterval(goToRef, 1);
};

export const toTop = () => {
  const gotoTop = () => {
    let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    currentPosition -= 3;
    if (currentPosition > 0) {
      window.scrollTo(0, currentPosition);
    } else {
      window.scrollTo(0, 0);
      clearInterval(timer);
      timer = null;
    }
  };
  let timer = setInterval(gotoTop, 1);
};
