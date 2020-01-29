import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(data => {
                setPosts(data.data)
            }).catch(err => console.log(err));
    }, []);
    


    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DataFetching
