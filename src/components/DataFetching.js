import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching() {

    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err));
    }, [idFromButtonClick]);
    


    return (
        <div>
            <input 
                type="text" 
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <button type="button" onClick={handleClick}>Click</button>
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
