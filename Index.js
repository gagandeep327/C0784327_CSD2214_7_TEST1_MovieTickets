const main = document.querySelector('.main');
const seats = document.querySelector('.row.seat:not(.occupied)');
const count = document.getElementById('count');
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
            count.innerText = selectedSeats.length;
            price.innerText = selectedSeats.length * +selectedMoviePrice;
        }
    };

    populateUI();

    selectedMovie = (movieIndex, moviePrice) => {
        localStorage.setItem('selectedMovieIndex', movieIndex);
        localStorage.setItem('selectedMoviePrice', moviePrice);
    };

    const updateSelectedSeatsCount = () => {
        const selectedSeats = document.querySelectorAll('.row .selected');

        const seatsIndex = [...selectedSeats].map(seat =>[...seats].indexOf(seat));

        localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

        const selectedSeatsCount = selectedSeatsCount;

        count.innerText = selectedSeatsCount;
        price.innerText = selectedSeatsCount * ticketPrice;
    };

    //Seat Select event
    main.addEventListener('click', e => {
        if(
            e.target.classList.main('seat')&&
            !e.target.classList.main('occupied')
        ){
            e.target.classList.toggle('selected');

            updateSelectedSeatsCount();
        }
    });

    //movie select event
    movieSelect.addEventListener('change', e =>{
        ticketPrice = +e.target.value;
        selectedMovie(e.target.selectedIndex, e.target.value);

        updateSelectedSeatsCount();
    });

