// Destructuring: trả values string ,Rest Paramaters: trả value array

var course = {
    name : 'Javascript',
    price: 1000,
};

var { name: parentName, description= 'default description'} = course;

console.log(description);

    function logger( ...params) {
        console.log(params);
    }

    console.log(logger(1,2,3,4,5,6,7,8,9,10,11,12));

// Spread operator
    var arr = ['JS', 'RUBY', 'PHP'];

    var arr2 = ['ReactJs' , 'Dart'];

    var arr3 =[...arr2, ...arr];

    console.log(arr3);

    var defaultConfig = {
        api: 'https://domain-course',
        appiVersion: 'v1',
        pther: 'other',
    }

    var exerciseConfig = {
        ...defaultConfig,
        api: 'https://domain-trang-bai-tap' // trùng tên thuộc tính trong 1 object nên lấy value của thuộc tính sau cùng
    };

    console.log(exerciseConfig);

    var array = ['JS', 'PHP' , 'RUBY'];

    function output(...rest) {
        for(var i = 0; i < rest.length; i++) {
            console.log(rest[i]);
        }
    }

    output(...array)

// Modules: Import / Export'

import logger1 from './logger.js';
import * as constaints from './constaints.js'

console.log(logger1('test...',TYPE_WARN));
