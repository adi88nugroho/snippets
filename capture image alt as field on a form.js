jQuery(document).ready(function($) {
    //add clicked id for targeting image. usefull for more than 2 CTA on a page
    $('#pop img').click(function() {
        $(this).attr('id', 'clicked');
        //targeting the alt of the image
        const alt = document.querySelector('#clicked').getAttribute('alt');
        //number form on page, number field
        document.forms[2].elements[9].value = alt;
    });
})