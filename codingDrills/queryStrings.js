/*
'''
Build a query string parser

Assumptions:
- no spaces, treat special chars as regular string
- if value is empty string, return boolean true
- if duplicate keys, return an array of values
- value type can be string, an array of strings or a boolean
- assume valid input starting with "?"

EXAMPLE(S)
Input: ?foo=hello&bar=world
Output: { foo: "hello", bar: "world" }

Input: ?foo=hi&new=&bar=bye&foo=extraFoo&foo=
Output: { foo: ['hi','extraFoo',true], bar: 'bye', new: true}


FUNCTION SIGNATURE
function parseQueryString(query) {  returns object }
def parse_query_string(query: str) -> dict:

1. remove first character
2. split at '&' to get ['foo=hello', 'bar=world']
3. Initialize an Object
4. loop through array
  - at each string separate at '=' using split
    - ['foo', 'hello'], ['bar', 'world']
  - if (key exists)
      => if (value is array) => push current value to array
      => else create array => push previous value and current value
    => else setting key and value
'''

code plan for reverse:
1) initalize array
2) loop through key value pairs
    3) for each pair in normal case calls helper function
    4) for lists values, iterate through the list and calls helper function for each
5) make helper function that:
    adds string that is key, "=" then value but first checks it the value is true and if so gives a blank value
5) join with "&"
7) initalize string with question mark
8) combine the two strings
*/

function buildQueryString(queryObj) {
  let queryStr = [];

  for (let key in queryObj) {
    if (Array.isArray(queryObj[key])){
      for (let value of queryObj[key]){
        queryStr.push(helper(key, value))
      }
    } else {
      queryStr.push(helper(key, queryObj[key]))
    }
  }
  queryStr = queryStr.join("&");
  return "?" + queryStr;
}


function helper(key, value) {
  let outputStr = "" + key + "=";
  if (value === true) {
    outputStr += ""
  } else {
    outputStr += value;
  }
  return outputStr;
}

console.log(buildQueryString({ foo: [ 'apple', 'table' ], bar: [ 'world', 'chair' ] }))
console.log(buildQueryString({ foo: true }))

/*

'''
Build a query string parser

EXAMPLE(S)
Input:
Output: { foo: "hello", bar: "world" }


FUNCTION SIGNATURE
function parseQueryString(query) {  returns object }
def parse_query_string(query: str) -> dict:

1. remove first character
2. split at '&' to get ['foo=hello', 'bar=world']
3. Initialize an Object
4. loop through array
  - at each string separate at '=' using split
    - ['foo', 'hello'], ['bar', 'world']
  - if (key exists)
      => if (value is array) => push current value to array
      => else create array => push previous value and current value
    => else setting key and value


function builtQueryString(queryObject) { return string}

Input: {'foo': ['apple', 'table'], 'bar': ['world', 'chair']}
Output: "?foo=apple&bar=world&foo=table&bar=chair"

code plan for reverse:
1) initalize array
2) loop through key value pairs
    3) for each pair in normal case calls helper function
    4) for lists values, iterate through the list and calls helper function for each
5) make helper function that:
    adds string that is key, "=" then value but first checks it the value is true and if so gives a blank value
5) join with "&"
7) initalize string with question mark
8) combine the two strings

'''

def parseQueryString(query):

    pairs = query[1:].split("&")
    queryPairs = {}

    for pair in pairs:
        key = pair.split("=")[0]
        value = pair.split("=")[1]

        if value == "":
            value = True

        if key in queryPairs:
            if type(queryPairs[key]) == list:
                queryPairs[key].append(value)

            else:
                queryPairs[key] = [queryPairs[key]]
                queryPairs[key].append(value)

        else:
            queryPairs[key] = value

    return queryPairs

print(parseQueryString("?foo=apple&bar=world&foo=table&bar=chair")) # {foo : [apple, table], bar: [world, table]}
print(parseQueryString("?foo=")) # {foo: true}
print(parseQueryString("?foo=cat&bar=dog")) # {foo: "cat", bar: "dog"}
print(parseQueryString("?a=1&b=2&a=0")) # {a: [1,0], b:2}
print(parseQueryString("?foo=hello&foo=world"))

*/