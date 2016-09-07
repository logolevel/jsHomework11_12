(function($) {

  $.fn.carousel = function(options) {
//переменые для кастомизации, содержат значения по умолчанию
  var defaults = {
    borderImg: '1px solid black',
    widthImg: '100px',
    imgWrap: '600px'
  };
//Ищем DOM элементы для кастомизации
  var $imgAll = $('.carousel-element img');
  var $imgWrap = $('.carousel-hider');

  var settings = $.extend(defaults, options);

//переменые для работы карусели
  var leftUIEl = $('.carousel-arrow-left');
  var rightUIEl = $('.carousel-arrow-right');
  var elementsList = $('.carousel-list');

  var pixelsOffset = 125;
  var currentLeftValue = 0;
  var elementsCount = elementsList.find('li').length;
  var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
  var maximumOffset = 0;

//методы для изменения внешнего вида
//работаем с изображениями
  $imgAll.css({
  'border': settings.borderImg,
  'max-width': settings.widthImg
});
  console.log(settings.widthImg);

//работаем с шириной контейнера для изображений
  $imgWrap.css({
    'width': settings.imgWrap
  });

//события для прокрутки карусели
  leftUIEl.click(function() {        
      if (currentLeftValue != maximumOffset) {
          //шаг прокрутки = ширина изображения + паддинг
          currentLeftValue += parseInt(settings.widthImg) + 25;
          elementsList.animate({ left : currentLeftValue + "px"}, 500);
      }        
  });

  rightUIEl.click(function() {        
      if (currentLeftValue != minimumOffset) {
          //шаг прокрутки = ширина изображения + паддинг
          currentLeftValue -= parseInt(settings.widthImg) + 25;
          elementsList.animate({ left : currentLeftValue + "px"}, 500);
      }        
  });

return this;
}

})(jQuery);




