function kolobok(name) {
  switch (name) {
    case 'дедушка':
      return 'Я от дедушки ушёл'
    case 'заяц':
      return 'Я от зайца ушёл'
    case 'лиса':
      return 'Меня съели'
  }
}

console.log(kolobok('дедушка'))

function newYear(name) {
  if (name === 'Дед Мороз' || name === 'Снегурочка') {
    return `${name}! ${name}! ${name}!`
  }
}

console.log(newYear('Дед Мороз'))
