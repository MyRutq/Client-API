import React from 'react'
import Posts from './Posts';

function Home( {posts} ) {
    return (
        <div>
            <h1>Home</h1>
            <Posts posts={posts} />
        </div>
    )
}

export default Home
