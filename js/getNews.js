const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const cpage = document.querySelector(".cpage")
const realNews = document.querySelector(".show-news")
const api = "9bf6a869020045c09031869403a78602"; //get from https://newsapi.org/
let page = 1;

async function getNews(file) {
    let news = await fetch(file)
    let newsText = await news.text();
    const newsDict = JSON.parse(newsText);

    if (newsDict.status === "error") {
        realNews.innerHTML = `
        <div class="text-2xl align text-center ">
            <p>No news to show here</p>
        </div>
        `;
    } else {
        for (let newsID = 0; newsID < newsDict.articles.length; newsID++) {
            let alt = "News Image";
            let title = newsDict.articles[newsID]
            let desc = newsDict.articles[newsID].description
            let img = newsDict.articles[newsID].urlToImage;
            let url = newsDict.articles[newsID].url;
            if (title === null) {
                title = "Nothing to show here. Please Click on Read more";
            } else {
                title = newsDict.articles[newsID].title.slice(0, 64)
            }
            if (desc === null) {
                desc = "Nothing to show here. Please Click on Read more";
            } else {
                desc = newsDict.articles[newsID].content.slice(0, 72);
            }
            if (img === null) {
                alt = "nothing to show"
            } else {
                img = newsDict.articles[newsID].urlToImage;
            }
            if (cpage !== null) {
                cpage.innerHTML = `Page: ${page}`
            }

            if (realNews !== null) {
                realNews.innerHTML += `
    <div id="${newsID}" class="mx-auto  my-3 bg-white shadow-xl shadow-black-700/50 min-h-full w-72 relative ">
        <div class="w-fit max-h=24 truncate"><img class=" mx-0 max-h-32 my-0 w-72"
                src="${img}"
                alt="${alt}"></div>
        <div>
            <h1 class="mx-2 my-2 font-bold text-base ">${title}...
            </h1>
        </div>
        <div>
            <p class="mx-3 my-auto h-32">${desc}...</p>
        </div>
        <div>
            <button class="brand-color rounded-full py-2 px-4 mx-3 my-3 absolute bottom-0"><a
                    href="${url}" target="blank" >Read
                    More</a></button>
        </div>
    </div>`
            }
        }
    }


}


getNews(`https://newsapi.org/v2/everything?domains=wsj.com&page=${page}&apiKey=${api}`)



if (prevBtn !== null) {


    prevBtn.addEventListener("click", () => {

        if (page !== 1) {
            realNews.innerHTML = "";
            page = page - 1;
            getNews(`https://newsapi.org/v2/everything?domains=wsj.com&page=${page}&apiKey=${api}`)
        }
    })
}
if (nextBtn !== null) {
    nextBtn.addEventListener("click", () => {
        realNews.innerHTML = "";
        page = page + 1;
        getNews(`https://newsapi.org/v2/everything?domains=wsj.com&page=${page}&apiKey=${api}`)
    })
}