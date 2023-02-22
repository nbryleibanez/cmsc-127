var prev = document.getElementById('prev');
var next = document.getElementById('next');
var first = document.getElementById('first-page');
var second = document.getElementById('second-page')
var third = document.getElementById('third-page');
var fourth = document.getElementById('fourth-page');

let page = 1;

prev.addEventListener('click', function() {
    page--;

    if (page == 1) {
        first.style.display = 'block';
        second.style.display = 'none';
        third.style.display = 'none';
        fourth.style.display = 'none';
    } else if (page == 2) {
        first.style.display = 'none';
        second.style.display = 'block';
        third.style.display = 'none';
        fourth.style.display = 'none';
    } else if (page == 3) {
        first.style.display = 'none';
        second.style.display = 'none';
        third.style.display = 'block';
        fourth.style.display = 'none';
    } else if (page == 4) {
        first.style.display = 'none';
        second.style.display = 'none';
        third.style.display = 'none';
        fourth.style.display = 'block';
    }

});


next.addEventListener('click', function() {
        
        page++;

        if (page == 1) {
            first.style.display = 'block';
            second.style.display = 'none';
            third.style.display = 'none';
            fourth.style.display = 'none';
        } else if (page == 2) {
            first.style.display = 'none';
            second.style.display = 'block';
            third.style.display = 'none';
            fourth.style.display = 'none';
        } else if (page == 3) {
            first.style.display = 'none';
            second.style.display = 'none';
            third.style.display = 'block';
            fourth.style.display = 'none';
        } else if (page == 4 ) {
            first.style.display = 'none';
            second.style.display = 'none';
            third.style.display = 'none';
            fourth.style.display = 'block';
        }
    }
);
