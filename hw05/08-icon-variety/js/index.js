const elem = document.getElementById('output')

// Todo: make
const classNames = [
    'fa-heart',
    'fa-beer',
    'fa-star',
    'fa-bicycle',
    'fa-book',
    'fa-apple-alt',
    'fa-brain',
    'fa-chess'
]
// Exercise: using a for / of loop, iterate through the classNames list
// and output an icon that corresponds to each class.

/* let counter = 0;
while (counter < 1000) {
      elem.innerHTML += '<i class="fas ' + classNames [0,1,2] + '"></i>';
      counter += 1; */
let counter = 0;
  while (counter < 100) {
  for (names of classNames){
      elem.innerHTML += '<i class="fas ' + classNames [0] + '"></i>';
      elem.innerHTML += '<i class="fas ' + classNames [1] + '"></i>';
      elem.innerHTML += '<i class="fas ' + classNames [2] + '"></i>';
      elem.innerHTML += '<i class="fas ' + classNames [3] + '"></i>';
      elem.innerHTML += '<i class="fas ' + classNames [4] + '"></i>';
      elem.innerHTML += '<i class="fas ' + classNames [5] + '"></i>';
      elem.innerHTML += '<i class="fas ' + classNames [6] + '"></i>';
      elem.innerHTML += '<i class="fas ' + classNames [7] + '"></i>';
      counter += 3;}
}
// Note that these icons are drawing from the FontAwesome icons:
// https://fontawesome.com/icons?d=gallery&m=free
/* elem.innerHTML += '<i class="fas ' + classNames[0] + '"></i>'
elem.innerHTML += '<i class="fas ' + classNames[1] + '"></i>'
elem.innerHTML += '<i class="fas ' + classNames[2] + '"></i>' */
