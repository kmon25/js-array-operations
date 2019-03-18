//Example
var ary = ["A", "B", "C", "D", "E"];

//length 計算陣列的長度
console.log(ary.length); //5

//push() 方法會添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。
console.log(ary.push("F")); //6

//pop() 方法會移除並回傳陣列的最後一個元素。此方法會改變陣列的長度。
console.log(ary.pop()); //"F"

//unshift
console.log(ary.unshift("F")); //6

//shift() 方法會移除並回傳陣列的第一個元素。此方法會改變陣列的長度。
console.log(ary.shift()); //"A"

//splice(insert) 方法可以藉由刪除既有元素並／或加入新元素來改變一個陣列的內容。
console.log(ary.splice(3, 0, "F")); //[] ary = ["B", "C", "D", "F", "E"]

//splice(remove) 方法可以藉由刪除既有元素並／或加入新元素來改變一個陣列的內容。
console.log(ary.splice(3, 1)); //["F"]  ary = ["B", "C", "D", "E"]

//indexOf() 方法會回傳給定元素於陣列中第一個被找到之索引，若不存在於陣列中則回傳 -1。
console.log(ary.indexOf("D")); //2

//lastIndexOf() 方法會回傳給定元素於陣列中最後一個被找到之索引，若不存在於陣列中則回傳 -1。搜尋的方向為由陣列尾部向後（即向前）尋找，啟始於 fromIndex。
console.log(ary.lastIndexOf("D")); //2

//join() 方法會將陣列（或一個類陣列（array-like）物件）中所有的元素連接、合併成一個字串，並回傳此字串。
console.log(ary.join(":")); //"A:B:C:D:E"

//reverse() 方法會原地（in place）反轉（reverses）一個陣列。陣列中的第一個元素變為最後一個，而最後一個元素則變成第一個。
console.log(ary.reverse()); //["E", "D", "C", "B", "A"]

//sort() 方法會原地（in place）對一個陣列的所有元素進行排序，並回傳此陣列。
//排序不一定是穩定的（stable）。預設的排序順序是根據字串的 Unicode 編碼位置（code points）而定。
console.log(ary.sort()); //["A", "B", "C", "D", "E"]

//some() 方法會測試陣列中是否至少有一個元素通過由給定之函式所實作的測試。
console.log(ary.some(function(item) {
	return item === "C";
})); //true

//every() 方法會測試陣列中的所有元素是否都通過了由給定之函式所實作的測試。
console.log(ary.every(function(item) {
	return item.length === 1;
})); //true

//forEach() 方法會將陣列內的每個元素，皆傳入並執行給定的函式一次。
console.log(ary.forEach(function(item) {
	return item;
})); //undefined

//reduce() 方法將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值。
console.log(ary.reduce(function(prevItem, item) {
	return prevItem + item;
})); //"ABCDE"

//reduceRight() 方法將一個累加器及陣列中每一個值（由右至左）傳入回呼函式，將陣列化為單一值。
console.log(ary.reduceRight(function(prevItem, item) {
	return prevItem + item;
})); //"EDCBA"

//map() 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。
console.log(ary.map(function(item) {
	return item + item;
})); //["AA", "BB", "CC", "DD", "EE"]

//filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
console.log(ary.filter(function(item) {
	return item > "C";
})); //["D", "E"]

//slice() 方法會回傳一個新陣列物件，為原陣列選擇之 begin 至 end（不含 end）部分的淺拷貝（shallow copy）。而原本的陣列將不會被修改。
console.log(ary.slice(2, 4)); //["C", "D"]

//concat() 方法被用來合併兩個或多個陣列。此方法不會改變現有的陣列，回傳一個包含呼叫者陣列本身的值，作為代替的是回傳一個新陣列。
console.log(ary.concat(["G", "H"])); //["A", "B", "C", "D", "E", "G", "H"]
