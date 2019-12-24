$(function () {
    'use strict';

    window.Input = function (selector) {
        var $ele;
        var me = this; //重新定义this，否则会报错
        var rule_obj = {
            required: true
        };

        this.load_validator = function () {
            var val = this.get_val();
            this.validator = new Validator(val, rule_obj);
        }

        this.get_val = function () {
            return $ele.val();
        }

        function init() {
            find_ele();
            parse_rule();
            me.load_validator(); //重新定义的this在这里使用
            listen();
        }

        function listen() {
            $ele.on('change', function () {
                var r = me.validator.is_valid(me.get_val());
                console.log('valid:', r)
            }) 
        }
        
        function find_ele() {
            if (selector instanceof $) {  //如果selector已经是一个选好的JQuery对象了
                $ele = selector;
            } else {
                $ele = $(selector);
            }
            
        }

        function parse_rule() {
            var rule_str = $ele.data('rule');
            if (!rule_str) return

            var rule_arr = rule_str.split('|');
            for(var i=0; i<rule_arr.length; i++) {
                var item_str = rule_arr[i];
                var item_arr = item_str.split(':');
                rule_obj[item_arr[0]] = JSON.parse(item_arr[1]); //用JSON来解析

            }
        }

        
        init();
    }
        
    }

)