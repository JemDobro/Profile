'use strict';
/* global $ */

$(document).ready(function() {
  $('.menu').hide();
  $('.hamburger-menu').click(function() {
    $('.menu').slideToggle('slow');
  });
  $('.menu-nav-a').click(function() {
    $('.menu').slideToggle('slow');
  });
});