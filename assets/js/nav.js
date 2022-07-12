(function ($) {
  // Report table of contents toggle
  $('#toc-toggle').on('click', function () {
    $(this).attr('aria-expanded', function (i, attr) {
      return attr === 'true' ? 'false' : 'true'
    })
    this.classList.toggle('open')
    document.querySelector('.report-toc__list-wrapper').classList.toggle('open')
  })

  // Main navigation toggle
  $('#nav-toggle').on('click', function () {
    $(this).attr('aria-expanded', function (i, attr) {
      return attr === 'true' ? 'false' : 'true'
    })
    this.classList.toggle('open')
    document.querySelector('.top-nav__list').classList.toggle('open')
  })
})(jQuery)
