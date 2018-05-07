(function ($) {
   $(function () {
      $('.button-collapse').sideNav();
   });
})(jQuery); // end of jQuery name space

$(document).ready(function() {
   $('input.autocomplete').autocomplete({
      data: {
         "بازیگران": null,
         "خوانندگان": null,
         "Google": 'https://placehold.it/250x250'
      },
      limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
      onAutocomplete: function(val) {
         // Callback function when value is autcompleted.
         console.out(val);
      },
      minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
   });

   Materialize.scrollFire(getOptions());
});

function getOptions() {
   return [
      {selector: '.update-trigger', offset: 0, callback: function(el) {
         console.log("spy fired");
         // setTimeout(function(){ Materialize.scrollFire(getOptions()); }, 1000);
         // setTimeout(function(){ Materialize.scrollFire(getOptions()); }, 5000);
         // Materialize.scrollFire(getOptions());
         console.log("spy reconf");
         $('#id-ingr-loader-anm').toggle();
         setTimeout(function(){ $('#id-ingr-loader-anm').toggle(); }, 3000);
      } }
   ];
}
