import requester from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/games';

const buildUrl = (gameId) => `${BASE_URL}/${gameId}/comments`;

const create = async (gameId, username, text) => await requester.post(buildUrl(gameId), {username, text});

const getAll = async  (gameId) =>{
    const result  = await requester.get(buildUrl(gameId));

    const comment = Object.values(result);

    return comment
} 

    



export default {
    create,
    getAll,
}