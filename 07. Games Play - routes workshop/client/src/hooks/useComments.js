import commnetsAPI from "../api/comments-api";

export default function useCreateComment() {
    const commentCreateHandler = (gameId, comment) => commnetsAPI.create(gameId, comment)

    return commentCreateHandler
};