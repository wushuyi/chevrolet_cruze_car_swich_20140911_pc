;(function ($) {
    $(document).ready(function(){
        var total = {};
        total.pgname = 'PC端-科鲁兹官网';
        mz.pv(total.pgname + '-首页');
        $('#main .cruze_logo').on('click.total', function(e){
            mz.event(total.pgname + '-科鲁兹logo');
        });
        $('#main .chevrolet_logo').on('click.total', function(e){
            mz.event(total.pgname + '-雪佛兰logo');
        });
        $('#main .car1 .gotoBtn').on('click.total', function(e){
            mz.event(total.pgname + '-科鲁兹经典');
        });
        $('#main .car2 .gotoBtn').on('click.total', function(e){
            mz.event(total.pgname + '-全新科鲁兹');
        });
        $('#main .car3 .gotoBtn').on('click.total', function(e){
            mz.event(total.pgname + '-科鲁兹掀背车');
        });
    });
})(window.jQuery);