function isValid(s) {
  const stack = [];
  const map = {
      "(": ")",
      "[": "]",
      "{": "}"
  };

  for (let char of s) {
      if (char in map) {
          stack.push(char); // Если символ - открывающая скобка, добавляем ее в стек
      } else {
          // Если символ - закрывающая скобка
          if (stack.length === 0) {
              return false; // Если стек пуст, нет соответствующей открывающей скобки
          }
          const lastOpenBracket = stack.pop(); // Берем последнюю открывающую скобку из стека
          if (map[lastOpenBracket] !== char) {
              return false; // Если текущая закрывающая скобка не соответствует последней открывающей
          }
      }
  }

  return stack.length === 0; // Если стек пуст в конце, все скобки закрыты правильно
}

console.log(isValid("()")); // Вывод: true
console.log(isValid("()[]{}")); // Вывод: true
console.log(isValid("(]")); // Вывод: false
console.log(isValid("([)]")); // Вывод: false
console.log(isValid("{[]}")); // Вывод: true