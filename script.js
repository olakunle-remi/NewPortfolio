const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector("nav ul")

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';

}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () =>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 
            'backdropp-blur-lg', 'shadow-sm' );
            navLinks.classList.remove('bg-white','shadow', 'bg-opacity-50');
        }else{
            navBar.classList.remove('bg-white', 'bg-opacity', 'back-blur-lg',
                'shadow-sm');
                navLinks.classList.remove('bg-white','shadow', 'bg-opacity-50');
            
        }
})


// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function togglTheme(){
    if(document.documentElement.classList.contains(dark)){
        localStorage='dark';
    }else{
        localStorage.theme = "theme"
    }
  }
  