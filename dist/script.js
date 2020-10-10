const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)' );

const count  = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.getElementById('movie');

 //get Data from local storage
 const getDataFromStorage = ()=>{
    const selectedSeats =  JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats !== null && selectedSeats.length>0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    //const selectedMoviePrice =  localStorage.getItem('selectedMoviePrice');
    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}
getDataFromStorage();

 let ticketPrice =parseInt( movieSelect.value);

 // Save Movie data to localStorage
 const setMovieData = (movieIndex, moviePrice)=>{
     localStorage.setItem('selectedMovieIndex', movieIndex);
     localStorage.setItem('selectedMoviePrice',moviePrice);
 }
 const updateSelectedCount = ()=>{
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map(seat=>[...seats].indexOf(seat) );
    //Local storage

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    const countSeat=selectedSeats.length;
    count.innerText = countSeat;
    total.innerHTML = countSeat * ticketPrice;
 }

 //Movie select 
 movieSelect.addEventListener('change',e=>{
     setMovieData(e.target.selectedIndex, e.target.value);
     ticketPrice=+e.target.value;
     updateSelectedCount();
 })
//seat cliclk
 container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
 });

 updateSelectedCount();