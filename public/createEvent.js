const sideNav = document.querySelector('.sidenav');
        M.Sidenav.init(sideNav, {});

        // Slider
        const slider = document.querySelector('.slider');
        M.Slider.init(slider, {
            indicators: false,
            height: 200,
            transition: 500,
            interval: 3000
        });
        ///date picker
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelector('.datepicker');
            var instances = M.Datepicker.init(elems, {});
        });
        ///parallax
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelector('.parallax');
            var instances = M.Parallax.init(elems, {});
        });