$(document).on('click', '.job-filter-link', function(e){
    e.preventDefault();
    const label = $(this).text().trim();
    const q = $(this).data('query').trim();
    $('.dropdown-filter-list').removeClass('w--open');
    $('.job-filter-toggle__text').text(label);
    $('.job-individ-wrapper').hide();
    if (q) {
        $(`[data-job-type="${q}"]`).fadeIn();
    } else {
        $('.job-individ-wrapper').fadeIn();
    }
});

$(document).on('click', '.job-filter-link2', function(e){
    e.preventDefault();
    $(this).closest('.dropdown-filter-list').find('.job-filter-link2').removeClass('active');
    $(this).addClass('active');
    $(this).closest('.dropdown-filter-list').removeClass('w--open');
    const label = $(this).text().trim();
    $(this).closest('.filter-dropdown').find('.job-filter-toggle__text').text(label);
    const organization = $('.dropdown-filter-list__organization .active').data('filter-organization');
    const location = $('.dropdown-filter-list__location .active').data('filter-location');
    const month = $('.dropdown-filter-list__month .active').data('filter-month');
    $('.job-fair-individ-wrapper').hide();
    if (organization && location && month) {
        $(`[data-query-organization="${organization}"][data-query-location="${location}"][data-query-month="${month}"]`).fadeIn();
    } else if (organization && location) {
        $(`[data-query-organization="${organization}"][data-query-location="${location}"]`).fadeIn();
    } else if (location && month) {
        $(`[data-query-location="${location}"][data-query-month="${month}"]`).fadeIn();
    } else if (organization && month) {
        $(`[data-query-organization="${organization}"][data-query-month="${month}"]`).fadeIn();
    } else if (organization) {
        $(`[data-query-organization="${organization}"]`).fadeIn();
    } else if (location) {
        $(`[data-query-location="${location}"]`).fadeIn();
    } else if (month) {
        $(`[data-query-month="${month}"]`).fadeIn();
    } else {
        $('.job-fair-individ-wrapper').fadeIn();
    }
});

$(document).on('click', '.jc-collection-secondary .resources-slide-grid-inne', function(e){
    e.preventDefault();
    const link = $(this).data('link');
    window.location.href = link;
});