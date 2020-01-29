import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching() {

    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(data => {
                setPost(data.data)
            }).catch(err => console.log(err));
    }, [id]);
    


    return (
        <div>
            <input 
                type="text" 
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <div>{post.title}</div>
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default DataFetching
