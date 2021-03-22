// code originally from https://github.com/petercollingridge

const start1 = [
  'Dr',
  'Dw',
  'L',
  'M',
  'Qu',
  'Thr',
  'Tr',
  'Tw',
  'Scr',
  'Sl',
  'Sm',
  'Sp',
  'Spl',
  'Squ',
  'Wh',
  'Y',
];
const start2 = ['B', 'F', 'G', 'P'];
const secondConsonant = ['l', 'r', 'w', ''];
const vowels = ['a', 'e', 'ee', 'o', 'oo', 'i', 'u'];
const shortEndings = [
  'm',
  'rp',
  'rk',
  'rf',
  'nk',
  'mf',
  'mp',
  'b',
  'f',
  'zz',
  'x',
  'ng',
  'd',
  'p',
];
const longEndings = [
  'zz',
  'dd',
  'mp',
  'mpf',
  'pp',
  'ck',
  'bb',
  'gg',
  'nk',
  'rf',
  'rk',
  'rp',
  'ng',
];
const longEndings2 = ['o', 'ok', 'le', 'le', 'le', 'et', 'et', 'aldo'];

const randFromArray = function (arr) {
  return arr[Math.floor(arr.length * Math.random())];
};

const randFromArrayNotX = function (arr, x) {
  let result = x;
  while (result === x) {
    result = randFromArray(arr);
  }
  return result;
};

const getPrefix = function () {
  if (Math.random() < 0.5) {
    return randFromArray(start1);
  } else {
    return randFromArray(start2) + randFromArray(secondConsonant);
  }
};

const mickleMackleMoo = function (prefix, vowel, end) {
  const word = '-' + prefix + randFromArrayNotX(vowels, vowel) + end;
  return word + Math.random() < 0.25 ? '-' + prefix + 'oo' : '';
};

const yungoSpungo = function (prefix, vowel, end) {
  let newPrefix = prefix;
  while (newPrefix === prefix) {
    newPrefix = getPrefix();
  }
  return '-' + avoidUglyPatterns(newPrefix, vowel, end).join('');
};

const avoidUglyPatterns = function (start, vowel, end) {
  // Avoid "ror" patterns
  if (start.charAt(start.length - 1) === end.charAt(0)) {
    if (end.length === 1) {
      end = randFromArrayNotX(shortEndings, end[0]);
    } else {
      end = end.substr(1);
    }
  }

  // Avoid having two 'u's
  if (start.charAt(start.length - 1) === 'u' && vowel === 'u') {
    vowel = randFromArrayNotX(vowels, 'u');
  }

  return [start, vowel, end];
};

const getLongName = function () {
  const start = getPrefix();
  const vowel = randFromArray(vowels);
  const end = randFromArray(longEndings) + randFromArray(longEndings2);

  return avoidUglyPatterns(start, vowel, end);
};

const getShortName = function () {
  const start = getPrefix();
  const vowel = randFromArray(vowels);
  const end = randFromArray(shortEndings);

  return avoidUglyPatterns(start, vowel, end);
};

export const getSillyWord = () => {
  let word, r;

  if (Math.random() < 0.5) {
    // Long name
    const parts = getLongName();
    word = parts.join('');
    r = Math.random();

    if (r < 0.1) {
      word += mickleMackleMoo.apply(null, parts);
    } else if (r < 0.25) {
      word += yungoSpungo.apply(null, parts);
    } else if (r < 0.4) {
      word = getPrefix() + randFromArray(['aa', 'ee', 'oo']) + '-' + word;
    }
  } else {
    // Short name
    const parts = getShortName();
    word = parts.join('');
    r = Math.random();

    if (r < 0.2) {
      word += '-' + getLongName().join('');
    } else if (r < 0.4) {
      word = getLongName().join('') + '-' + word;
    } else if (r < 0.6) {
      word += yungoSpungo.apply(null, parts);
    } else if (r < 0.7) {
      word += mickleMackleMoo.apply(null, parts);
    } else if (r < 0.8) {
      word += randFromArrayNotX(vowels, 'e');
    } else if (r < 0.85) {
      const finalConsonant = word.charAt(word.length - 1);
      const vowel = randFromArrayNotX(vowels, 'e');
      word += vowel + finalConsonant + vowel;
    }
  }

  return word;
};
