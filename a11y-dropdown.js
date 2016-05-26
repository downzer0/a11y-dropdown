var Dropdown = function() {
    
    var menu = '.a11y-dropdown',
        item = $(menu).children('li'),
        target = $('.menu-item-has-children').find('a');
    
    return {
        
        init: function() {
            Dropdown.removeSubChildren();
            Dropdown.hideMenus();
            Dropdown.listenForMouse();
            Dropdown.listenForKeyboard();
        },
        
        removeSubChildren: function() {
            $('.menu-item .menu-item-has-children').each(function(index, element) {
                $(element).removeClass('menu-item-has-children').find('.sub-menu').remove();
            });
        },
        
        hideMenus: function(p) {
            $(item).each(function(index, element) {
                $(element).not(p).removeClass('is-expanded')
                     .find('.sub-menu').addClass('sr-only');
            });
        },
        
        showMenu: function(m, p, e) {
            if (!m || m === "undefined") return false;

            Dropdown.hideMenus();

            $(p).addClass('is-expanded');
            $(m).removeClass('sr-only');
        },
        
        listenForMouse: function() {
            var m, p;
            
            $(document).on('click', function(event) {
                Dropdown.hideMenus();
            });
            
            $(menu).on('mouseenter', '.menu-item-has-children', function(event) {
                m = $(event.currentTarget).find('.sub-menu');
                p = $(event.currentTarget);
                
                if (m && p) {
                    Dropdown.showMenu(m, p, event);
                }
            });
            
            $(menu).on('mouseleave', '.is-expanded', function(event) {
                var in_menu = $(event.currentTarget).children();
                
                if ($(event.currentTarget) in in_menu) {
                    return false;
                } else {
                    Dropdown.hideMenus();
                }
            });
        },
        
        listenForKeyboard: function() {
            $(menu).on('focus', '.menu-item-has-children a', function(e) {
                var that = $(e.target), m, p;

                if ($(that).parents('.menu-item-has-children')) {
                    m = $(that).parents('.menu-item-has-children').find('.sub-menu');
                    p = $(that).parents('.menu-item-has-children');

                    Dropdown.hideMenus();
                    Dropdown.showMenu(m, p, event);
                }
            });
            
            $(menu).on('blur', '.menu-item-has-children a', function(e) {
                Dropdown.hideMenus();
            });
        }
    };
}();

Dropdown.init();
