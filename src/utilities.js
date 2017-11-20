export const getFormatedDate = (d) => {
  const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const dayNames = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  let dateLong = Date.parse(d);

  if (!dateLong) {
    return {
      day: 'Н/Д',
      time: '-'
    }
  }

  let date = new Date(dateLong);
  let month = monthNames[date.getUTCMonth()];
  let day = dayNames[date.getUTCDay()];
  let dayStr = '' + date.getDate() + ' ' + month + ', ' + day;
  let timeStr = '' + date.getUTCHours() + ':' + date.getMinutes();

  return {
    day: dayStr,
    time: timeStr
  }
}

export const onlyUnique = (arr) => {
  if (!Array.isArray(arr)) {
    return arr;
  }

  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

export const getUniqueCarriers = (flights) => {
  if (!flights || !flights.length) return [];

  let carriers = flights.map(({ carrier }) => carrier);
  return onlyUnique(carriers).sort();
}