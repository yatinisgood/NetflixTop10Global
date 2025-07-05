document.addEventListener('DOMContentLoaded', () => {
    const dateDropdownContainer = document.getElementById('date-dropdown-container');
    const selectedDate = document.getElementById('selected-date');
    const dateOptions = document.getElementById('date-options');
    const customSelectTrigger = dateDropdownContainer.querySelector('.custom-select__trigger');

    const jsonFiles = [
    "netflix_top10_2021-07-04",
    "netflix_top10_2021-07-11",
    "netflix_top10_2021-07-18",
    "netflix_top10_2021-07-25",
    "netflix_top10_2021-08-01",
    "netflix_top10_2021-08-08",
    "netflix_top10_2021-08-15",
    "netflix_top10_2021-08-22",
    "netflix_top10_2021-08-29",
    "netflix_top10_2021-09-05",
    "netflix_top10_2021-09-12",
    "netflix_top10_2021-09-19",
    "netflix_top10_2021-09-26",
    "netflix_top10_2021-10-03",
    "netflix_top10_2021-10-10",
    "netflix_top10_2021-10-17",
    "netflix_top10_2021-10-24",
    "netflix_top10_2021-10-31",
    "netflix_top10_2021-11-07",
    "netflix_top10_2021-11-14",
    "netflix_top10_2021-11-21",
    "netflix_top10_2021-11-28",
    "netflix_top10_2021-12-05",
    "netflix_top10_2021-12-12",
    "netflix_top10_2021-12-19",
    "netflix_top10_2021-12-26",
    "netflix_top10_2022-01-02",
    "netflix_top10_2022-01-09",
    "netflix_top10_2022-01-16",
    "netflix_top10_2022-01-23",
    "netflix_top10_2022-01-30",
    "netflix_top10_2022-02-06",
    "netflix_top10_2022-02-13",
    "netflix_top10_2022-02-20",
    "netflix_top10_2022-02-27",
    "netflix_top10_2022-03-06",
    "netflix_top10_2022-03-13",
    "netflix_top10_2022-03-20",
    "netflix_top10_2022-03-27",
    "netflix_top10_2022-04-03",
    "netflix_top10_2022-04-10",
    "netflix_top10_2022-04-17",
    "netflix_top10_2022-04-24",
    "netflix_top10_2022-05-01",
    "netflix_top10_2022-05-08",
    "netflix_top10_2022-05-15",
    "netflix_top10_2022-05-22",
    "netflix_top10_2022-05-29",
    "netflix_top10_2022-06-05",
    "netflix_top10_2022-06-12",
    "netflix_top10_2022-06-19",
    "netflix_top10_2022-06-26",
    "netflix_top10_2022-07-03",
    "netflix_top10_2022-07-10",
    "netflix_top10_2022-07-17",
    "netflix_top10_2022-07-24",
    "netflix_top10_2022-07-31",
    "netflix_top10_2022-08-07",
    "netflix_top10_2022-08-14",
    "netflix_top10_2022-08-21",
    "netflix_top10_2022-08-28",
    "netflix_top10_2022-09-04",
    "netflix_top10_2022-09-11",
    "netflix_top10_2022-09-18",
    "netflix_top10_2022-09-25",
    "netflix_top10_2022-10-02",
    "netflix_top10_2022-10-09",
    "netflix_top10_2022-10-16",
    "netflix_top10_2022-10-23",
    "netflix_top10_2022-10-30",
    "netflix_top10_2022-11-06",
    "netflix_top10_2022-11-13",
    "netflix_top10_2022-11-20",
    "netflix_top10_2022-11-27",
    "netflix_top10_2022-12-04",
    "netflix_top10_2022-12-11",
    "netflix_top10_2022-12-18",
    "netflix_top10_2022-12-25",
    "netflix_top10_2023-01-01",
    "netflix_top10_2023-01-08",
    "netflix_top10_2023-01-15",
    "netflix_top10_2023-01-22",
    "netflix_top10_2023-01-29",
    "netflix_top10_2023-02-05",
    "netflix_top10_2023-02-12",
    "netflix_top10_2023-02-19",
    "netflix_top10_2023-02-26",
    "netflix_top10_2023-03-05",
    "netflix_top10_2023-03-12",
    "netflix_top10_2023-03-19",
    "netflix_top10_2023-03-26",
    "netflix_top10_2023-04-02",
    "netflix_top10_2023-04-09",
    "netflix_top10_2023-04-16",
    "netflix_top10_2023-04-23",
    "netflix_top10_2023-04-30",
    "netflix_top10_2023-05-07",
    "netflix_top10_2023-05-14",
    "netflix_top10_2023-05-21",
    "netflix_top10_2023-05-28",
    "netflix_top10_2023-06-04",
    "netflix_top10_2023-06-11",
    "netflix_top10_2023-06-18",
    "netflix_top10_2023-06-25",
    "netflix_top10_2023-07-02",
    "netflix_top10_2023-07-09",
    "netflix_top10_2023-07-16",
    "netflix_top10_2023-07-23",
    "netflix_top10_2023-07-30",
    "netflix_top10_2023-08-06",
    "netflix_top10_2023-08-13",
    "netflix_top10_2023-08-20",
    "netflix_top10_2023-08-27",
    "netflix_top10_2023-09-03",
    "netflix_top10_2023-09-10",
    "netflix_top10_2023-09-17",
    "netflix_top10_2023-09-24",
    "netflix_top10_2023-10-01",
    "netflix_top10_2023-10-08",
    "netflix_top10_2023-10-15",
    "netflix_top10_2023-10-22",
    "netflix_top10_2023-10-29",
    "netflix_top10_2023-11-05",
    "netflix_top10_2023-11-12",
    "netflix_top10_2023-11-19",
    "netflix_top10_2023-11-26",
    "netflix_top10_2023-12-03",
    "netflix_top10_2023-12-10",
    "netflix_top10_2023-12-17",
    "netflix_top10_2023-12-24",
    "netflix_top10_2023-12-31",
    "netflix_top10_2024-01-07",
    "netflix_top10_2024-01-14",
    "netflix_top10_2024-01-21",
    "netflix_top10_2024-01-28",
    "netflix_top10_2024-02-04",
    "netflix_top10_2024-02-11",
    "netflix_top10_2024-02-18",
    "netflix_top10_2024-02-25",
    "netflix_top10_2024-03-03",
    "netflix_top10_2024-03-10",
    "netflix_top10_2024-03-17",
    "netflix_top10_2024-03-24",
    "netflix_top10_2024-03-31",
    "netflix_top10_2024-04-07",
    "netflix_top10_2024-04-14",
    "netflix_top10_2024-04-21",
    "netflix_top10_2024-04-28",
    "netflix_top10_2024-05-05",
    "netflix_top10_2024-05-12",
    "netflix_top10_2024-05-19",
    "netflix_top10_2024-05-26",
    "netflix_top10_2024-06-02",
    "netflix_top10_2024-06-09",
    "netflix_top10_2024-06-16",
    "netflix_top10_2024-06-23",
    "netflix_top10_2024-06-30",
    "netflix_top10_2024-07-07",
    "netflix_top10_2024-07-14",
    "netflix_top10_2024-07-21",
    "netflix_top10_2024-07-28",
    "netflix_top10_2024-08-04",
    "netflix_top10_2024-08-11",
    "netflix_top10_2024-08-18",
    "netflix_top10_2024-08-25",
    "netflix_top10_2024-09-01",
    "netflix_top10_2024-09-08",
    "netflix_top10_2024-09-15",
    "netflix_top10_2024-09-22",
    "netflix_top10_2024-09-29",
    "netflix_top10_2024-10-06",
    "netflix_top10_2024-10-13",
    "netflix_top10_2024-10-20",
    "netflix_top10_2024-10-27",
    "netflix_top10_2024-11-03",
    "netflix_top10_2024-11-10",
    "netflix_top10_2024-11-17",
    "netflix_top10_2024-11-24",
    "netflix_top10_2024-12-01",
    "netflix_top10_2024-12-08",
    "netflix_top10_2024-12-15",
    "netflix_top10_2024-12-22",
    "netflix_top10_2024-12-29",
    "netflix_top10_2025-01-05",
    "netflix_top10_2025-01-12",
    "netflix_top10_2025-01-19",
    "netflix_top10_2025-01-26",
    "netflix_top10_2025-02-02",
    "netflix_top10_2025-02-09",
    "netflix_top10_2025-02-16",
    "netflix_top10_2025-02-23",
    "netflix_top10_2025-03-02"
    ];

    // --- Populate Custom Dropdown ---
    jsonFiles.forEach(file => {
        const option = document.createElement('div');
        option.classList.add('custom-option');
        option.textContent = file.replace('netflix_top10_', ''); // Make it cleaner
        option.dataset.value = file;
        dateOptions.appendChild(option);

        option.addEventListener('click', () => {
            selectedDate.textContent = option.textContent;
            dateDropdownContainer.classList.remove('open');
            // Remove 'selected' class from all options
            dateOptions.querySelectorAll('.custom-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            // Add 'selected' class to the clicked option
            option.classList.add('selected');
            fetchAndDisplayData(option.dataset.value);
        });
    });

    // --- Custom Dropdown Logic ---
    customSelectTrigger.addEventListener('click', () => {
        dateDropdownContainer.classList.toggle('open');
    });

    window.addEventListener('click', (e) => {
        if (!dateDropdownContainer.contains(e.target)) {
            dateDropdownContainer.classList.remove('open');
        }
    });


    // --- Initial Load ---
    if (jsonFiles.length > 0) {
        const firstOption = dateOptions.querySelector('.custom-option');
        if (firstOption) {
            selectedDate.textContent = firstOption.textContent;
            firstOption.classList.add('selected');
            fetchAndDisplayData(firstOption.dataset.value);
        }
    }
});

async function fetchAndDisplayData(fileName) {
    try {
        const response = await fetch(`HTML_Json/${fileName}.json`);
        const jsonData = await response.json();
        
        const groupedData = groupAndSortData(jsonData);
        
        renderShelves(groupedData);

    } catch (error) {
        console.error('Error fetching or processing data:', error);
        const appContainer = document.getElementById('app-container');
        appContainer.innerHTML = '<p style="color: red; text-align: center;">Could not load movie data.</p>';
    }
}

function groupAndSortData(data) {
    const grouped = data.reduce((acc, item) => {
        const group = item.groupfile || 'Uncategorized';
        if (!acc[group]) {
            acc[group] = [];
        }
        acc[group].push(item);
        return acc;
    }, {});

    for (const group in grouped) {
        grouped[group].sort((a, b) => parseInt(a.weeklyRank, 10) - parseInt(b.weeklyRank, 10));
        // Limit to 10 items per group
        grouped[group] = grouped[group].slice(0, 10);
    }
    
    return grouped;
}

function renderShelves(groupedData) {
    const appContainer = document.getElementById('app-container');
    appContainer.innerHTML = ''; // Clear previous content

    for (const groupTitle in groupedData) {
        const movies = groupedData[groupTitle];
        
        const section = document.createElement('section');
        section.className = 'anime-section';

        const title = document.createElement('h1');
        title.className = 'section-title';
        // Capitalize first letter and replace underscores
        title.textContent = groupTitle.charAt(0).toUpperCase() + groupTitle.slice(1).replace(/_/g, ' ');

        const shelf = document.createElement('div');
        shelf.className = 'anime-shelf';

        movies.forEach(movie => {
            const animeItem = document.createElement('div');
            animeItem.className = 'anime-item';

            const posterContainer = document.createElement('div');
            posterContainer.className = 'poster-container';

            const img = document.createElement('img');
            // Use the 'bigImage' for the poster, fallback to a default if not available
            img.src = movie.bigImage || 'card.jpg'; 
            img.alt = movie.title;

            const titleOverlay = document.createElement('div');
            titleOverlay.className = 'title-overlay';

            const animeTitle = document.createElement('p');
            animeTitle.className = 'anime-title';
            animeTitle.textContent = movie.title;

            const animeDetails = document.createElement('p');
            animeDetails.className = 'anime-details';
            const weeklyViews = parseInt(movie.weeklyViews);
            if (weeklyViews === 0) {
                const weeklyHoursViewedMillions = (parseInt(movie.weeklyHoursViewed) / 1000000).toFixed(1);
                animeDetails.textContent = `觀賞時數 ${weeklyHoursViewedMillions}M 小時 | 進榜週數 ${movie.cumulativeWeeksInTop10}`;
            } else {
                const weeklyViewsMillions = (weeklyViews / 1000000).toFixed(1);
                animeDetails.textContent = `觀看次數 ${weeklyViewsMillions}M | 進榜週數 ${movie.cumulativeWeeksInTop10}`;
            }

            titleOverlay.appendChild(animeTitle);
            titleOverlay.appendChild(animeDetails);
            posterContainer.appendChild(img);
            posterContainer.appendChild(titleOverlay);
            animeItem.appendChild(posterContainer);
            shelf.appendChild(animeItem);
        });

        section.appendChild(title);
        section.appendChild(shelf);
        appContainer.appendChild(section);
    }
}
