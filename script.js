const btn = document.getElementById('btn');

const options = {
  method: 'GET',
  params: { all: 'true' },
  headers: {
    'X-RapidAPI-Key': 'e4e3f86944mshf6842e7daf9d792p15ddf4jsn2fcb39ea2f6d',
    'X-RapidAPI-Host': 'odds.p.rapidapi.com'
  }
};

btn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://odds.p.rapidapi.com/v4/sports', options);
    const data = await response.json();

    // Loop through each item in the data array and display the desired properties
    data.forEach(item => {
      const group = item.group;
      const description = item.description;
      const title = item.title;

      // Create a new HTML element to display the information
      const resultElement = document.createElement('div');
      resultElement.innerHTML = `<p>Group: ${group}</p><p>Description: ${description}</p><p>Title: ${title}</p>`;
      
      // Append the result element to a container in your HTML
      // Make sure you have an element with an appropriate ID in your HTML, e.g., <div id="results"></div>
      const resultsContainer = document.getElementById('results');
      resultsContainer.appendChild(resultElement);
    });
  } catch (error) {
    console.error(error);
  }
});

