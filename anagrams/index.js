//Напиши метод isAnagrams(), который принимает два строчных аргумента
// и выводит true, если строки являются анаграммами, и false, если строки ими не являются.

function isAnagrams(str1, str2) {

    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')
}

console.log(isAnagrams('melon', 'lemon'));
console.log(isAnagrams('lemon', 'melon'));
console.log(isAnagrams('melon', 'melon'));
console.log(isAnagrams('MELON', 'lemon'));
console.log(isAnagrams('abcde2', 'c2abed'));
console.log(isAnagrams('kilso', 'osilk'));

module.exports = isAnagrams