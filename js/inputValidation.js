$.fn.ownFormValidate = function () {
    var invalidInputClass = 'invalid',
        validInputClass = 'normal-state';

    var isInputValid = function ($input) {
        var reg = new RegExp($input.attr('pattern'), 'gi');
        var isInputEmpty = $input.val() == '';
        var doesInputMatchRegex = reg.test($input.val());

        if ( isInputEmpty || !doesInputMatchRegex) {
            return false;
        } 

        return true;
    }

    var prepareInput = function () {
        var $input = $('input')
        $input.on('blur keyup', function () { 
            if(isInputValid($input)){
                $input.removeClass(invalidInputClass).addClass(validInputClass);
            } else {
                $input.removeClass(validInputClass).addClass(invalidInputClass);
            }
        });
    }

    prepareInput();

    var $form = $(this);
    $form.submit(function () {
        var $input = $('input')
        if (!isInputValid($input)) {
            $('#inputEmail').attr('placeholder','email@email');
            $('#wrongEmail').addClass('invalid');
            return false;
        }

        return true;
    });
}

$(function () {
    $('form').ownFormValidate();
});