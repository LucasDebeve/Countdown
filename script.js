const jours = document.querySelector('.jour');
const heures = document.querySelector('.heure');
const minutes = document.querySelector('.minute');
const secondes = document.querySelector('.seconde');

const countDown = () => {
    // Today
    const now = new Date();
    // Extract year
    const year = now.getFullYear();
    const countDate = new Date('May 23, ' + year +' 00:00:00').getTime();
    const gap = countDate - now.getTime();
    
    // Calculating the time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    // Calculating the days, hours, minutes and seconds
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    
    // Displaying the result
    jours.innerHTML = `${textDay}`;
    heures.innerHTML = `${textHour}`;
    minutes.innerHTML = `${textMinute}`;
    secondes.innerHTML = `${textSecond}`;
};

// Calling the function every second
setInterval(countDown, 1000);