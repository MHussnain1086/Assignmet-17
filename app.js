// 1. Write a JavaScript program to list the properties of a JavaScript object.
const shoe =()=>{
    var get = document.getElementById(`get`).value
    var get2 = prompt(`Please Enter 2nd Property`)
    var get3 = prompt(`Please Enter 3rd Property`)
     
    var obb ={
        get : `${get}`,
        get2 : `${get2}`,
        get3 : `${get3}`,
    }
    var got = Object.values(obb)
    var gey = JSON.stringify(got)
    console.log(gey);
    document.getElementById(`result`).innerHTML = gey
}
// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
const shoed =()=>{
    var get =document.getElementById(`get2`).value
    var student = {
        name : "David Rayy",
        class : "VI",
        rollno : 12 
    };
    delete student[get];
    console.log(student);
    var got = JSON.stringify(student)

    document.getElementById(`result2b`).innerHTML = `After Deleting <br/> ${got}`
} 
var student = {
    name : "David Rayy",
    class : "VI",
    rollno : 12 
};
var gg = JSON.stringify(student)
const mimi =()=>{
    document.getElementById(`result2`).innerHTML = gg
}
// 3. Write a JavaScript program to get the length of a JavaScript object.
const lengh =()=>{
    var get = document.getElementById(`get3`).value
    var get2 = prompt(`Please Enter Class`)
    var get3 = prompt(`Please Enter Roll No`)
     
    var student = {
        name : `${get}`,
        class : `${get2}`,
        rollno : `${get3}`,
        section : `Star`
    };
    var got = Object.keys(student)
    var dd = got.length
    var gey = JSON.stringify(dd)
    var grr = JSON.stringify(student)
    console.log(gey);
    document.getElementById(`result3`).innerHTML =`${grr}<br/>and<br/>
    Length of This Object is ${gey}`
}
// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
const status =()=>{
    var get = document.getElementById(`get4`).value
    var library = [ 
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaac',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title:  'Mocking', 
            readingStatus: false
        }];
var goy = ''
        for(let i = 0 ; i < library.length ; i++){
            if(library[i].title == get){
                console.log(library[i]);
                goy = JSON.stringify(library[i])
            }
        }
        document.getElementById(`result4`).innerHTML = `Result <br/> ${goy}`
}
// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.   
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
const obclass =()=>{
    var get = document.getElementById(`get5`).value
    var get3 = prompt (`Please Enter Height of Cylinder`)
    var volume =` πr2h`
      var cylinder ={
        pi : 3.1415,
        radius : get,
        height : get3,
      }

      var result = 3.1415 * get * get * get3
      var fd = result.toFixed(4)
      console.log(cylinder);
      console.log(fd);

      document.getElementById(`result5`).innerHTML = `Volume of Cylinder with Four Decimal places is [${fd}]`
    
}
// 6. Write a Bubble Sort algorithm in JavaScript.   
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

const algorithm =()=>{
    var get = document.getElementById(`get6`).value
    var get2 = prompt(`Please Enter 2nd Number`)
    var get3 = prompt(`Please Enter 3rd Number`)
    var get4  = prompt(`Please Enter 4th Number`)
    var get5 = prompt(`Please Enter 5th Number`)

    var array = [get,get2,get3,get4,get5]

var got = array.sort()
console.log(got);
document.getElementById(`result6`).innerHTML = `By Sorting According to Bubble Algorithm <br/>
[${got}]`


}

// 7. Write a JavaScript program which returns a subset of a string.   
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]
 const subSet=()=>{
     var gte =document.getElementById(`get7`).value
     var j= 1
     var k =0
     var h =1
     var f = 1   
     var set = []
     var set2 =[]
    // console.log( gte.slice(1,3))
     for(let i = 0 ; i < gte.length ; i++ ){
         var got = gte.slice(k,j)
         set[i] = got

         j++
     }
    //  console.log(set);

    for (let g = 0 ; g < gte.length -1 ; g++){
        var gote = gte.slice(f,h+1)
        set2[g] = gote
        h++
    }
    console.log(set2);

    var marf = set.concat(set2)
    // console.log(marf);
    var ggg = gte.charAt(gte.length -1)
    // console.log(ggg);
    var merge = marf.concat(ggg)

    document.getElementById(`result7`).innerHTML=`By SubSeting the Given String [${merge}]`
 }
//  8. Write a JavaScript program to create a Clock.   
//  Note: The output will come every second.
//  Expected Console Output :
//  "14:37:42"
//  "14:37:43"
//  "14:37:44"
//  "14:37:45"
//  "14:37:46"
// //  "14:37:47"
function but (){
setInterval(function clock(){
    var get = new Date();
    console.log(get.toLocaleTimeString())
    var time = get.toLocaleTimeString()
    document.getElementById(`result8`).innerHTML = time
},1000)
}
// 9. Write a JavaScript program to calculate the area and perimeter of a circle.   
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
    const areaPerimeter=()=>{
        var get =parseInt(document.getElementById(`get9`).value)
        var pOfCircle = `2πr`
        var aOfCircle = `πrsquare`
       
        var area = get*get*3.141
        var perimeter = 2*3.1415*get

document.getElementById(`result9`).innerHTML = `Perimeter of Circle is [${perimeter}]<br/>
Area of Circle is [${area}]`
    }
//     10. Write a JavaScript program to sort an array of JavaScript objects.   
// Sample Object :
// var library = [ 
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];
// Expected Output:
// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]
const sortObject =()=>{
    var library = [ 
        {
            title:  'The Road Ahead',
            author: 'Bill Gates',
            ID: 1254
        },
        {
            title: 'Walter Isaacson',
            author: 'Steve Jobs',
            ID: 4264
        },
        {
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            ID: 3245
        },
         {
             title: `Solo Leveling`,
             author: `Ch-Gong`,
             ID:3400
         }   
    ];
var myArr =[library[0],library[1],library[2],library[3]]
console.log(myArr);
var correctArray = myArr.sort().reverse()
console.log(correctArray);

}










