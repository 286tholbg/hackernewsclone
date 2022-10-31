export default function Story(story){
    console.log(story)


    return `
        <div class="story">
            <div>
                <span>${story.index}</span>
                <span class="upvote">▲</span>
                <a href="${story.url}" target="_blank">${story.title}</a>
                <span>(${story.domain})</span>
            </div>
            <div>
                <div class="gray">
                    ${story.points} points by ${story.user} ${story.time_ago}
                    |
                    <a href="#/item?id=${story.kd}">${story.comments_count} comments</a>
                    |
                    <span class="favorite">
                        <i class="fa-regular fa-star"></i>
                        Add to Favorites
                    </span>
                </div>
            </div>
        </div>
    `
}