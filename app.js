function fetchImage() {
            const url = 'http://127.0.0.1:8000/get_image';

            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok: ' + response.statusText);
                    }
                    return response.blob();
                })
                .then((blob) => {
                    console.log(blob)
                    const imageUrl = URL.createObjectURL(blob);
                    const imageElement = document.createElement("img");
                    imageElement.src = imageUrl;
                    const container = document.getElementById("image-container");
                    container.innerHTML = '';
                    container.appendChild(imageElement);
                })
                .catch((error) => console.error('Fetch error:', error));
        }

        document.getElementById("fetch-image-button").addEventListener("click", fetchImage);