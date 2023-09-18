// Исходные данные по слайдеру (const)]
const gallery = document.querySelectorAll('.gallery');
const galleryImages = document.querySelectorAll('.gallery__picture');
const galleryList = document.querySelector('.gallery__list');
const galleryToogle1 = document.querySelectorAll('.pagination__toogle--1');
const galleryToogle2 = document.querySelectorAll('.pagination__toogle--2');
const galleryToogle3 = document.querySelectorAll('.pagination__toogle--3');

let galleryCount = 0;
let galleryWidth = slider.offsetWidth;

galleryList.classList.remove('gallery__list--nojs');

function nextImage() {
  galleryCount++;

}
