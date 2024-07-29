import { IPost } from "../types/posts";


export async function fetchPosts(): Promise<IPost[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const body = await response.json();
        return body;

    } catch(e) {
        console.log(e);
        return [];
    }
}

export async function getById(id: string) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
        const body = await response.json();
        return body;
    } catch (e) {
        console.log(e);
    }
}

export async function getCommentsByPostId(id: string) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const body = await response.json();
        return body;
    } catch (e) {
        console.log(e);
    }
}