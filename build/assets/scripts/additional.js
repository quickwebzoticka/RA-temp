export default class Additional {
    constructor() {
        $(document).on('click', '.tabs-nav-item:not(.active)',function() {
            $(this).addClass('active').siblings().removeClass('active');

            $(document).find('.tabs-content-item')
                       .removeClass('active')
                       .eq($(this).index())
                       .addClass('active');
        })
    }
}