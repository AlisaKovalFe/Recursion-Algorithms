## Анаграммы. Поиск анаграмм

В этой задаче ты будешь писать метод, который расскажет, являются ли два слова анаграммами.  Анаграмма - это слово, образованное перестановкой букв другого слова. Например, ты можешь записать слово *melon*, переставив буквы в слове *lemon*. Поэтому *melon* является анаграммой *lemon*, также как *lemon* является анаграммой *melon*.

### Релиз 0. Понимание анаграмм

Чтобы начать выполнять эту задачу, давай подумаем о том, как можно понять, являются ли два слова анаграммами? Попробуй придумать алгоритм обнаружения анаграмм, а затем объяснить алгоритм своему напарнику.

Легко ли объяснить этот алгоритмический процесс? Понял ли напарник твои объяснения? Если при объяснении этого процесса другому человеку возникли трудности, то, вероятно, будет сложно перевести этот алгоритм в код. Изменяй объяснение до тех пор, пока процесс не будет восприниматься другими людьми без каких-либо трудностей в понимании процесса.

Затем переведи получившийся процесс в псевдокод. Твой псевдокод должен быть простым для человеческого понимания, а также для перевода в код.

### Релиз 1. Нахождение анаграмм

Напиши метод `isAnagrams()`, который принимает два строчных аргумента и выводит `true`, если строки являются анаграммами, и `false`, если строки ими не являются.

```javascript
// Порядок аргументов не имеет значения
isAnagrams('melon', 'lemon');
// => true
isAnagrams('lemon', 'melon');
// => true

// Слово является анаграммой самого себя
isAnagrams('melon', 'melon');
// => true

// Регистр не влияет
isAnagrams('MELON', 'lemon');
// => true

// Аргументы могут быть любой последовательностью символов (не обязательно - слова)
isAnagrams('abcde2', 'c2abed');
// => true
isAnagrams('kilso', 'osilk');
// => true
```

### Релиз 2. Тестирование

Тесты отсутствуют. Тебе нужно будет написать их самостоятельно. Помни наш основанный на тестах подход к разработке: начинай с простейшего случая, а затем переходи к более сложным.