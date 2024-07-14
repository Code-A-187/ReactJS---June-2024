import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom'


export default function ArticleDetails() {
    const [article, setArticle] = useState({});
    // const location = useLocation()
    const navigate = useNavigate()
    const { articleId } = useParams();


    useEffect(() => {
        (async () =>{
            const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${articleId}`);
            
            if(response.statusText == 'No Content') {
                navigate('/not-found')
                return;
            }

            const result = await response.json();

            setArticle(result)
        })();
    }, [])

  return (

    <div className="p-40">
        <div className="lg:max-w-lg">
        <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{article.title}</h1>
        <p className="mt-6 text-xl leading-8 text-gray-700">
            {article.content}
        </p>
        </div>
    </div>
        
  )
}