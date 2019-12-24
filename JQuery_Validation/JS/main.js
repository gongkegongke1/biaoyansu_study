$(function () {
    'use strict'

    var test = new Input('#test',);
    var valid = test.validator.is_valid();
    console.log('valid: ' + valid)
})