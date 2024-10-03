// fetch , load and show categories on html
const loadCategories = async () => {
	try {
		const res = await fetch(
			"https://openapi.programming-hero.com/api/phero-tube/categories"
		);
		if (!res.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await res.json();
		await displayCategories(data.categories);
	} catch (error) {
		console.error("Error loading categories:", error);
		alert("Failed to load categories. Please try again later.");
	}
};

const displayCategories = async (categoriesData) => {
	const containeer = document.getElementById("categories-content");
	categoriesData.forEach((item) => {
		// console.log(item);
		const button = document.createElement("button");
		button.classList = "btn";
		button.innerText = item.category;
		containeer.appendChild(button);
	});
};
// Call loadCategories to fetch and display categories
loadCategories();
// Load videos
const loadVideos = async () => {
	try {
		const res = await fetch(
			"https://openapi.programming-hero.com/api/phero-tube/videos"
		);
		if (!res.ok) {
			throw new Error("Network response was not ok");
		}

		const data = await res.json();
		await displayVideos(data.videos);
	} catch (error) {
		console.error("Error loading categories:", error);
		alert("Failed to load categories. Please try again later.");
	}
};
const displayVideos = async (videos) => {
	const videoContent = document.getElementById("videos");
	videos.forEach((video) => {
		console.log(video);
		const card = document.createElement("div");
		card.classList = "card card-compact ";
		card.innerHTML = `
		<figure class="h-[200px]">
    <img
      src=${video.thumbnail}
	  class="h-full w-full object-cover"
      alt="video thumbnail" />
  </figure>
  <div class="px-0 py-3 flex gap-2">
    <div>
	<img class="h-10 w-10 rounded-full object-cover" src=${
		video.authors[0].profile_picture
	} />
	</div>
	<div>
	<h1 class="font-bold">${video.title}<h1/>
	<div class="flex items-center gap-2">
	<p class="text-gray-400">${video.authors[0].profile_name}</P>
	${
		video.authors[0].verified === true
			? `<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>`
			: ""
	}
	
	</div>
	<p></p>
	</div>
  </div>
  
		`;
		videoContent.appendChild(card);
	});
};
// call loadVideos
loadVideos();
