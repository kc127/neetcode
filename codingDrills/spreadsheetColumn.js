/*
'''
In most spreadsheets, the rows are named with numbers (starting at 1) and the columns are given names that are strings of capital letters. The first column is 'A', the second is 'B' up to the 26th which is 'Z'. At that point, they progress to 'AA' for 27, then 'AB' for 28, etc.

As part of our new product, we need functions to convert between these column header strings and their ordinal values, and visa versa!

Start out with the column header to ordinal direction. If you get that working, do the inverse!

The challenges arise from our labeling system not having a character that represents zero. This problem will make you thankful that ancient Babylonian, Chinese and other civilizations came up with the idea of zero.

Assumptions:
- valid input > no empty string, valid capital letters
- input size can go up to 5 letters
_ input can be in any order

ASCII:
A = 65
B = 66
C = 67
J =
Z = 90

EXAMPLE(S)
columnToOrdinal("A") => 1
columnToOrdinal("J") =>10
columnToOrdinal("Z") => 26
columnToOrdinal('AA') => 27
columnToOrdinal('AB') =>28
columnToOrdinal('AD') =>28
columnToOridnal('ABC') => 731

"ABC"

LEET = L*** + E** + E** + T
     = L * 26^3 + E * 26^2 + E * 26^2 + T

(((12*26) + 5) * 26 + 5) * 26 + 20

                               + 20

ordinalToColumn(1) =>"A"
ordinalToColumn(26) => "Z"
ordinalToColumn(27) => "AA"
ordinalToColumn(52) => "AZ"


FUNCTION SIGNATURE
function columnToOrdinal(headerStr)
function ordinalToColumn(ord)
'''
*/



function columnToOrdinal(charStr) {
  let start = charStr.length - 1; // 0
  let total = 0;
  let i = 0;

  while(start >= 0 ){
   let char = charStr[start];
   total += (char.charCodeAt(0) - 64) * (26**i)
   start--;
   i++;
  }

  return total;
 }


 console.log(columnToOrdinal("J")) // 10
 console.log(columnToOrdinal("Z") ) // 26

 console.log(columnToOrdinal('AA')) // 27
 console.log(columnToOrdinal('AB'))// 28
 console.log(columnToOrdinal('AD')) // 30
 console.log(columnToOrdinal('ABC')) // 731 