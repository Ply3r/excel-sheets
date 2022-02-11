const XLSX = require('xlsx');

//  FUNCTIONS
const readSheet = (fileName) => {
  const { Sheets: { Sheet1: Sheets } } = XLSX.readFile(fileName)
  return Sheets;
}

const filterByColumn = (key, column, space) => {
  const [start, end] = space;
  const letter = new RegExp(column, 'i');
  const number = key.match(/[\d]+$/);

  if (!number) return false;
  const numberInt = +number[0]

  return letter.test(key) && (numberInt >= start && numberInt <= end);
}

const getByColumnAndInterval = (Sheet, column, interval = [0, Infinity]) => {
  if (typeof Sheet !== 'object') throw new Error('Invalid Sheet! should be an Object');
  if (typeof column !== 'string') throw new Error('Invalid column! should be a String');
  if (typeof interval !== 'object') throw new Error('Invalid interval! should be an array');
  if (interval.length !== 2) throw new Error('Invalid interval! should be an array with 2 numbers');
  interval.forEach((value) => {
    if (typeof value !== "number") throw new Error('Invalid interval! should be an array with 2 numbers')
  })

  const data = Object.entries(Sheet)
    .filter(([key]) => filterByColumn(key, column, interval))
    .map(([_key, { v }]) => v);
  return data
}

const getUniqueArray = (array) => {
  const hold = array
    .filter((value, index, arr) => arr.indexOf(value) === index);
  return hold;
}

const getInfosInARow = (array, separator) => {
  const hold = [];
  const times = [];
  array.forEach((value, index) => {
    const regexSeparator = new RegExp(separator);
    const arrayInfos = value.split(regexSeparator);
    const infos = arrayInfos.map((info) => info.replace(/["]+/gmi, '').trim());

    infos.forEach(() => times.push(index + 1));
    hold.push(...infos);
  })
  return [hold, times];
}

module.exports = { 
  readSheet,
  getByColumnAndInterval,
  getUniqueArray,
  getInfosInARow
}
