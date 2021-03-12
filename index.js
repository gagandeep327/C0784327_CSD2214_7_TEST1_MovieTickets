const main = document.querySelector('.main');
const seats = document.querySelector('.row.seat:not(.occupied)');
const done = document.getElementById('done');
const price= document.getElementById('price');

const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

const populateUI = () => {
    const selectedSeats = JSON.parse(localStorage.getitem('selectedSeats'));

    if(selectedSeats !== null&& selectedSeats.length > 0) {
        seats.forEach(seat,index) => {
            if (selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getitem('selectedMovieIndex');
    const selectedMoviePrice = localStorage.getitem('selectedMoviePrice');

    if(selectedMovieIndex !== null){
        movieSelect.selectIndex = selectedMovieIndex;
    }
    if
        (selectedMoviePrice !==null){
            done.innerText = selectedSeats.length;
            price.innerText = selectedSeats.length * +selectedMoviePrice;
        }
    };

