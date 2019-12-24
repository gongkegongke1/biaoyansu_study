$(function () {
    'use strict';

    window.Validator = function (val, rule_obj) {

        this.is_valid = function (new_val) {
            var key;
            val = new_val || val;
            //如果不是必填项且用户未填写任何内容，则直接判定为合法
            if (!rule_obj.validate_required && !val) {
                return true;
            }

            console.log(rule_obj)

            for (key in rule_obj) {
                //防止重复检查
                if (key === 'required') {
                    continue;
                }
                //调用rule中相对应的方法
                var r = this['validate_' + key]();
                if (!r) return false;
            }

            return true;
        }

        this.validate_max = function () {
            pre_max_min();
            return val <= rule_obj.max
        }

        this.validate_min = function () {
            pre_max_min();
            return val >= rule_obj.min
        }

        this.validate_maxLength = function () {
            pre_length();
            return val.length <= rule_obj.maxlength
        }

        this.validate_minLength = function () {
            pre_length();
            return val.length >= rule_obj.minlength
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
            var reg = new RegExp(rule_obj.pattern)
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