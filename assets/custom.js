$(document).on('click', '.job-filter-link', function(e){
    e.preventDefault();
    const label = $(this).text().trim();
    const q = $(this).data('query').trim();
    $('.dropdown-filter-list').removeClass('w--open');
    $('.job-filter-toggle__text').text(label);
    if (q) {
        $('.job-individ-wrapper').hide();
        $(`[data-job-type="${q}"]`).fadeIn();
    } else {
        $('.job-individ-wrapper').hide();
        $('.job-individ-wrapper').fadeIn();
    }
});