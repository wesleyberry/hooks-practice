import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetchingReview() {

    const [post, setPost] = useState('');
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () => setIdFromButtonClick(id);

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
            <h2>{post.title}</h2>
        </div>
    )
}

export default DataFetchingReview
