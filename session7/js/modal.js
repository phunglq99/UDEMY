"use strict";

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

console.log(btnShowModal);
const closeModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const addModal = function(){
modal.classList.add('hidden');
overlay.classList.add('hidden');
}

    btnShowModal.forEach(item => {
        item.addEventListener('click', () => {
            closeModal()
        });
    })
    btnCloseModal.addEventListener('click',function(){
        addModal()
    });
    overlay.addEventListener('click', addModal);

// bàn phím

    document.addEventListener('keydown', function(e){
        if( e.key=== 'Escape' && !modal.classList.contains('hidden') ){
            addModal()
        }
    })
