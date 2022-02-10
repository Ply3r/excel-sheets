# excel-sheets

  

## What is?

  

Is a package with some function to manipulate xlsx files, you can parse your sheets into objects, filter by column and interval, get multiple information's in a row and filter unique information's in a array.

  

# Functions

  

## readSheet

  

```javascript

const Sheet = readSheet(fileName);

```
#### Input
 - fileName: A `string` that contains the directory of the xlsx file.
 #### Output
- Sheet: An `object` with the columns and rows of the Sheet. 
 

  

## getByColumnAndInterval

```javascript

const Data = getByColumnAndInterval(Sheet, Column, Interval);

```
#### Input
 - Sheet: An `object` returned by `readSheet`
- Column: A `string` of the column you want to filter on
- Interval(Optional): An `array` like `[start, end]` where start is the first row and end is the last row you want to filter on, by default get all rows.
#### Output
- Data: An `array` that contains the information of each row of the column that you specified

## getUniqueArray
```javascript

const uniqueArray = getUniqueArray(Array);

```
### Input
- Array: an `array` with repeated items
### Output
- uniqueArray: the same `array` but now without repeated items

## getInfosInARow
```javascript

const Infos = getInfosInARow(array, separator);

```
### Input
- Array: an `array` of strings that contains multiple information's
- Separator: the `string` separation pattern; 
### Output
- Infos: An `array` like `[infos, times]` where infos is the array of separate strings and times is an array containing the times that one index has been called on each iteration in a row

