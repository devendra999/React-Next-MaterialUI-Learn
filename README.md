

react js 
---------------------

1. If you want to Get All Unique Values From Array of Objects
    let a = new set(['1','1','2','3','2','3','4','2','5', 54546, 445]);
    - its also checked data types

2. spread operator(...)
    If you want to use anothery array value then use spread operator, also you can use spread operator call in anothery array or object

    first case
    ----------
    const fullname = ['vinod', 'thapa'];
    const biodata  = [1, ...fullname, 26, 'male'];
    --- console.log(biodata);

    second case
    -----------
    var shootergames = ['free fire', 'pubG', 'call of duty', 'far cry', 'residen evil'];
    var racinggames = ['need for speed', 'gran turismo', 'burnout'];
    --- var games = [...shootergames, ...racinggames];

    third case (Destructuring of array)
    -----------------------------------
    var shootergames = ['free fire', 'pubG', 'call of duty', 'far cry', 'residen evil'];
    --- var [first, ...remaining] = shootergames;

    fourth case 
    -----------
    const fullName = [
        fname : 'Devendra',
        lname : 'Prajapati'
    ];

    const bioData = [
        id: 1,
        ...fullName,
        age: 29,
        gender : 'male'
    ];
    --- console.log(bioData);



    redux
    ------
    npm i redux react-redux redux-thunk

