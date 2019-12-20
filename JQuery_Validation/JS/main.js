$(function () {
    'use strict'

    var validator = new Validator(' 5a  ', {
        // max: 100,
        // min: 18,
        maxlength: 5,
    })

    var result = validator.isNumeric();
    console.log('result: ' + result)
})