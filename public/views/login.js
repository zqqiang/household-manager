define(['marionette', 'templates/compiled'], function(Marionette, JST) {

    // Add Behaviors
    window.Behaviors = {};
    Marionette.Behaviors.behaviorsLookup = function() {
        return window.Behaviors;
    }

    var SubmitLogin = Marionette.Behavior.extend({
        events: {
            'click @ui.submit': 'submitLogin'
        },
        submitLogin: function() {
            console.log('submit');
        }
    });

    window.Behaviors.SubmitLogin = SubmitLogin;

    var Login = Marionette.ItemView.extend({
        template: JST.LoginTemplate,
        className: 'login-page',
        ui: {
            'submit': 'span[type="submit"]'
        },
        behaviors: {
            SubmitLogin: {

            }
        }
    });

    return Login;
});
