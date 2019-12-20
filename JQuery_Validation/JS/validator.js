$(function () {
    'use strict';

    window.Validator = function (val, rule) {

        this.validate_max = function () {
            pre_max_min();
            return val <= rule.max
        }

        this.validate_min = function () {
            pre_max_min();
            return val >= rule.min
        }

        this.validate_maxLength = function () {
            pre_length();
            return val.length <= rule.maxlength
        }

        this.validate_minLength = function () {
            pre_length();
            return val.length >= rule.minlength
        }

        this.numeric = function () {
            return $.isNumeric(val);
        }

        this.validate_required = function () {
            var real = $.trim(val);
            if (real!='') {
                return true
            } else {
                return false
            }
        }

        this.validate_pattern = function () {
            var reg = new RegExp(rule.pattern)
            return reg.test(val)
        }

        //把val = parseFloat(val)进行封装
        function pre_max_min() {
            val = parseFloat(val)
        }
        //把val = val.toString();进行封装
        function pre_length() {
            val = val.toString();
        }
    }

        
    }

)