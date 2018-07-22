(function (global) {
    var octoUtil = function () {
        return new octoUtil.init();
    };
    
    var lazy = [];
    var imgNumber = 1;
    var cleanLazy = function () {
        lazy = Array.from(lazy);
        lazy = lazy.filter(function (item) {
            return item.getAttribute('data-src');
        });
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
        },
        
        setLazy: function () {
            lazy = document.querySelectorAll('img[data-src]');
            console.log('Found ' + lazy.length + ' lazy images');
        },
        
        lazyLoad: function () {
            for (var i = 0; i < lazy.length; i++) {
                if (this.isInViewPort(lazy[i])) {
                    lazy[i].setAttribute('src', lazy[i].getAttribute('data-src'));
                    lazy[i].removeAttribute('data-src');
                    console.log('loading image ' + imgNumber);
                    imgNumber++;
                }
            }
            cleanLazy();
        },
        
        isInViewPort: function (item) {
            var rect = item.getBoundingClientRect();
            return (
                rect.bottom >= 0 && 
                rect.right >= 0 && 
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
                rect.left <= (window.innerWidth || document.documentElement.clientWidth)
             );
        }
    };
    
    global.octoUtil = global.OU$ = octoUtil;
})(window);