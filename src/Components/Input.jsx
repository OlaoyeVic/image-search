import React from 'react';

function  Input({urls, alt_description, user}) {

    return(
        <>   
            <div className = "image">
                <img src = {urls.small} alt = {alt_description} />
                <div className = "image-info">
                    <h3>{user.first_name} {user.last_name}</h3>
                    <span><a href = {user.portfolio_url}><img src = {user.profile_image.small} alt = {user.username} /></a></span>
                    <h6>Likes: {user.total_likes}</h6>
                </div>
            </div>
        </>
    )
}
export default Input