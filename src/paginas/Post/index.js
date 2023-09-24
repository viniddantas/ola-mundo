import "./Post.css";
import { /*Route, Routes,*/ useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrado from "paginas/NaoEncontrado";
import PaginaPadrao from "componentes/PaginaPadrao";

const Post = () => {
    const parametros = useParams();
    
    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });
  
    if (!post) {
        return <NaoEncontrado />;
    }
  
    return (
        <PaginaPadrao>
            <PostModelo 
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
                >
                <div className="post-markdown-container">
                    <ReactMarkdown>{post.texto}</ReactMarkdown>
                </div>
            </PostModelo>
        </PaginaPadrao>
       
    );
};

export default Post;
