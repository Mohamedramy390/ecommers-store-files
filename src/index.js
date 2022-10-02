
import '@laylazi/bootstrap-rtl-scss/scss/bootstrap-rtl.scss';
import './css/style.css';
import './scss/style.scss';


import 'jquery/dist/jquery.min';


import '@fortawesome/fontawesome-free/js/all.min';
import $ from "jquery";
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import "webpack-jquery-ui";
import "webpack-jquery-ui/css";
import "jquery-ui-touch-punch/jquery.ui.touch-punch.min.js";








var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) { return new bootstrap.Tooltip(tooltipTriggerEl) })

$(document).ready(function () {
    $('.add-btn').click(function () {
        alert('تمت الاضافه للعربه');
    });
    
    $('.product-options input[type="radio"]').change(function(){
        $(this).parents('.product-options').siblings().removeClass('active');
        $(this).parents('.product-options').addClass('active');
    });


    $('[data-product-quantity]').change(function(){
        var newquantity= $(this).val();

        var parent = $(this).parents('[data-product-info]');

        var price = parent.attr('data-product-price');

        var totalprice = newquantity * price;

        parent.find('.total-price').text(totalprice + "$");

        caltotalpriceplus();

    });

    $('[data-remove-from-cart]').click(function(){
        $(this).parents('[data-product-info]').remove();
        caltotalpriceplus();
    });

    function caltotalpriceplus(){
        var totalpriceplus = 0;

        $('[data-product-info]').each(function(){

            var price = $(this).attr('data-product-price');

            var quantity = $(this).find('[data-product-quantity]').val();

            var totalprice = price * quantity;
            
            totalpriceplus = totalpriceplus + totalprice;
        });

        $('.totalpriceplus').text(totalpriceplus + '$');

    }

   var citiesbycountry = {
        eg : ["القاهره","الاسكندريه"],
        sy : ["حلب","دمشق"],
        qt : ["الخور","الدوحه"],
        jd : ["الزرقاء","عمان"]
    };

    $('#form-checkout select[name="country"]').change(function(){

        var country = $(this).val();

        var cities  = citiesbycountry[country];

        $('#form-checkout select[name="city"]').empty();

        $('#form-checkout select[name="city"]').append('<option disabled selected value>اختر مدينه</option>');

        cities.forEach(function(city) {
            var newoption = $('<option></option>');
            newoption.text(city);
            newoption.val(city);

            $('#form-checkout select[name= "city"]').append(newoption);
 
        });

        
    })

    $('.payment-info input[value="on-delivary"]').click(function(){
        $('.payment-input').hide();
    });
    $('.payment-info input[value="credit-card"]').click(function(){
        $('.payment-input').show();
    });

    $( function() {
        $( "#slider-range" ).slider({
          range: true,
          min: 50,
          max: 1000,
          values: [ 250, 800 ],
          slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
          }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
          " - $" + $( "#slider-range" ).slider( "values", 1 ) );
      } );

});



