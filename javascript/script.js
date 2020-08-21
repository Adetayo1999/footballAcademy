const Menu =document.querySelector('.menu');
const MenuBtn=document.querySelector('.btn-menu');
const MenuBranding=document.querySelector('.menu-branding');
const MenuNav=document.querySelector('.menu-nav');
const NavItem=document.querySelectorAll('.nav-item');

var showMenu = false;
MenuBtn.addEventListener('click' , close);
function close(){
    if(!showMenu){
        Menu.classList.add('show');
        MenuBtn.classList.add('close');
        MenuBranding.classList.add('show');
        MenuNav.classList.add('show');
        NavItem.forEach(item => item.classList.add('show'));
        showMenu=true;
    }else{
        Menu.classList.remove('show');
        MenuBtn.classList.remove('close');
        MenuBranding.classList.remove('show');
        MenuNav.classList.remove('show');
        NavItem.forEach(item => item.classList.remove('show'));
        showMenu=false;
    }
}