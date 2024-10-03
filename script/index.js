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
		// console.log(data);
	} catch (error) {
		console.error("Error loading categories:", error);
		alert("Failed to load categories. Please try again later.");
	}
};
const displayCategories = async (categoriesData) => {
	const containeer = document.getElementById("categories-content");
	categoriesData.forEach((item) => {
		const buttonContainer = document.createElement("div");
		buttonContainer.innerHTML = `
		<button class="btn" onclick="buttonLoadCategories(${item.category_id})">${item.category}<button/>
		`;
		containeer.appendChild(buttonContainer);
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
	videoContent.innerHTML = "";

	if (videos.length === 0) {
		videoContent.classList.remove("grid");
		videoContent.innerHTML = `
		<div class="m-h-[300px] flex flex-col justify-center items-center gap-5">
		<img src="image/Icon.png" alt="logo image" />
		<h2 class="text-center text-xl font-bold">Oops!! Sorry, There is no content here</h2/>
		</div>
		
		`;
		return;
	} else {
		videoContent.classList.add("grid");
	}
	videos.forEach((video) => {
		// console.log(video);
		const card = document.createElement("div");
		card.classList = "card card-compact ";
		card.innerHTML = `
		<figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
	  class="h-full w-full object-cover"
      alt="video thumbnail" />
	  ${
			video.others.posted_date?.length === 0
				? ""
				: ` <span class="absolute text-xs right-2 bottom-2  bg-black text-white rounded p-1">${getTimeString(
						video.others.posted_date
				  )}</span>`
		}
	 
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
	</div>
  </div>
  
		`;
		videoContent.appendChild(card);
	});
};
// call loadVideos
loadVideos();
