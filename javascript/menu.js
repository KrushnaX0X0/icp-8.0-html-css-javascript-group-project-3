$(document).ready(function () {
    let timeSpent = 0;

    function updateTime() {
        timeSpent++;
        $('#productivity-counter').text(`Time spent on this site: ${timeSpent} seconds`);
    }

    setInterval(updateTime, 1000);

    $('.filter').click(function () {
        const filter = $(this).data('filter');
        $('.menu-item').hide();
        $(filter).show();
        $('.filter-active').removeClass('filter-active');
        $(this).addClass('filter-active');
    });

    const swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        loop: true,
    });
});


const menuButton = document.getElementById("menu")
const closeButton = document.getElementById("close")
function menu(hi) {
   let head = document.getElementById("head")
   if (hi==1) {
      head.classList.add("active")
   }
   else {
      head.classList.remove("active")
   }
}

