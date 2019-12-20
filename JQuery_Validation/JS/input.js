$(function () {
    'use strict';

    window.Input = function (selector) {
        var $ele;
        var rule_obj = {};

        function init() {
            find_ele();
        }
        
        function find_ele() {
            if (selector instanceof JQuery) {  //如果selector已经是一个选好的JQuery对象了
                $ele = selector;
            } else {
                $ele = $(selector);
            }
            
        }

        function parse_rule() {
            var rule_str = $ele.data('rule');
            if (!rule_str) return

            var rule_arr = rule_str.split('|');
            for(var i=0; i<=rule_str.length; i++) {
                var item_str = rule_arr[i];
                var item_arr = item_str.split(':');
                rule_obj[item_arr[0]] = JSON.parse(item_arr[1]); //用JSON来解析

            }
        }

        
        init();
    }
        
    }

)