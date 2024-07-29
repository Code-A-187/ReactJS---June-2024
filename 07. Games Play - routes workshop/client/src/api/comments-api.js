import requester from "./requester";

const BASE_URL = 'http://localhost:3030/data/comments';

const create = async (gameId, text) => await requester.post(BASE_URL, {gameId, text});

const getAll = async (gameId) =>{
    const result  = await requester.get(BASE_URL);
    
    const comments = Object.values(result);

    return comments
} 
 
const commentsAPI = {
    create,
    getAll,
}

export default commentsAPI