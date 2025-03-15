document.addEventListener('DOMContentLoaded', function() {
    const prayerTimesContainer = document.getElementById('prayer-times');

    // Function to fetch prayer times from Aladhan API
    function fetchPrayerTimes() {
        const apiUrl = 'http://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=5';
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const timings = data.data.timings;
                displayPrayerTimes(timings);
            })
            .catch(error => console.error('Error fetching prayer times:', error));
    }

    // Function to display prayer times
    function displayPrayerTimes(timings) {
        prayerTimesContainer.innerHTML = '';
        for (let prayer in timings) {
            const timeElement = document.createElement('div');
            timeElement.className = 'prayer-time';
            timeElement.textContent = `${prayer}: ${timings[prayer]}`;
            prayerTimesContainer.appendChild(timeElement);
        }
    }

    // Fetch prayer times on page load
    fetchPrayerTimes();
});
