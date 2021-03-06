;(function($){
	window.totalE = window.totalE || {};
    var $cache = {};
    $cache.window = $(window);
	$(document).ready(function (){
        $(document.images).on('dragstart', function(){
            return false;
        });
        $cache.main = $('#main');
        $cache.carbox = $('#main .carbox');
        $cache.carImg = $('.carImg', $cache.carbox);
        $cache.carbox.on('mouseover', function(e){
            var $self = $(this);
            $cache.carbox.removeClass('active');
            $self.addClass('active');
        });
        resize();
	});

    $(window).load(function(){
        $('#loading').hide(300);
    });

	$(window).resize(function() {
        resize();
	});

    function resize(){
        var nwindow = 1920 / 1080;
        var swindow = $cache.window.width() / $cache.window.height();
        if(nwindow > swindow){
            $cache.main.width($cache.window.height() * nwindow);
        }else{
            $cache.main.removeAttr('style');
        }
        var nimg = 640 / 1080;
        $cache.carImg.each(function(i){
            var $self = $(this);
            var $thisBox = $cache.carbox.eq(i);
            var boxW = $thisBox.width();
            var boxH = $thisBox.height();
            var thisH = boxW / nimg;
            var cssH = (boxH - thisH) / 2;
            $self.css({
                marginTop: cssH
            });
        });
    }

})(window.jQuery);