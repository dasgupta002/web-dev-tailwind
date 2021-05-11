const icontray = document.querySelector('#tray-icon');
const menuoptions = document.querySelector('#menu-options');

icontray.addEventListener('click', function() {
    if(menuoptions.classList.contains('hidden')) {
        menuoptions.classList.remove('hidden');
    } else {
        menuoptions.classList.add('hidden');
    }
});