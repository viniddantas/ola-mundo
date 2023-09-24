import './Inicio.css'

import posts from 'json/posts.json'
import PostCard from 'componentes/PostCard'

const Inicio = () => {
    return (
        <ul className='posts'>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post}/>
                </li>
            ))}
        </ul>
    )
}

export default Inicio