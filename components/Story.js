export default function Story(story){
    return `
        <div class="story">
            <div>
                <span>${story.index || ""}</span>
                <span class="upvote">▲</span>
                <a href="${story.url}" target="_blank">${story.title}</a>
                <span>(${story.domain})</span>
            </div>
            <div>
                <div class="gray">
                    ${story.points} points by ${story.user} ${story.time_ago}
                    |
                    <a href="#/item?id=${story.id}">${story.comments_count} comments</a>
                    |
                    <span class="favorite" data-story='${JSON.stringify(story)}'>
                        ${story.isFavorite ? `<i class="fa-solid fa-star"></i>` : `<i class="fa-regular fa-star"></i>`}
                        ${story.isFavorite ? "remove from favorites" : "add to favorites"}
                    </span>
                </div>
            </div>
        </div>
    `
}