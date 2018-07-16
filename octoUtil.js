(function (global) {
    var octoUtil = function () {
        return new octoUtil.init();
    };
    
    octoUtil.init = function () {
        
    };
    
    octoUtil.init.prototype = octoUtil.prototype = {
        isEqualArray: function (arr1, arr2) {
            if (arr1.length !== arr2.length) {
                return false;
            }
            for (var i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    return false;
                }
            }
            return true;
        },
        
        //object has no own properties
        isEmptyObject: function (obj) {
            if (obj == null) {
                return true;
            }
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    return false;
                }
            }
            return true;
        }
    };
    
    global.octoUtil = global.OU$ = octoUtil;
})(window);