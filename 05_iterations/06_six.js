// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
    
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) => num > 4)

// const newNums = myNums.filter((num) => {return num > 4})
// console.log(newNums);

// const newNums = []
// myNums.forEach ((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {title:'bookOne', genre: 'History', publish: 1986, edition: 1996},
    {title:'bookTwo', genre: 'Sceince', publish: 1986, edition: 1996},
    {title:'bookThree', genre: 'Fiction', publish: 1986, edition: 1996},
    {title:'bookFour', genre: 'Non-Fiction', publish: 1986, edition: 1996},
    {title:'bookFive', genre: 'History', publish: 1986, edition: 1996},
    {title:'bookSix', genre: 'Biological', publish: 1986, edition: 1996},
    {title:'bookSeven', genre: 'History', publish: 2000, edition: 1996},

]

let userBooks = books.filter((bk) => bk.genre === 'History')
userBooks = books.filter((bk) =>bk.publish >= 2000)
console.log(userBooks);
