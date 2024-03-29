import { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

import CardPostagem from "../cardPostagem/CardPostagem";

import Postagem from "../../../models/Postagem";

interface ListaPostagensProps {
    posts: Postagem[]
    getPosts: () => void
}

function ListaPostagens({getPosts, posts}: ListaPostagensProps) {
    
    useEffect(() => {
        getPosts()
    }, [posts.length])

    return (
        <>
            {posts.length === 0 && (
                <div className='flex w-full justify-center'>
                    <ThreeDots
                    visible={true}
                    height="200"
                    width="200"
                    color="orange"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />
                </div>
                 )}
            <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4'>
                {posts.map((postagem) => (
                    <CardPostagem key={postagem.id} post={postagem} />
                ))}
            </div>
        </>
    )
}

export default ListaPostagens