import axios from 'axios'
import { GetUsers, GetPosts, GetComments } from './types'

export const getUsersPromise = async(): Promise<Array<GetUsers>> => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data.data
}
export const getPostsPromise = async(): Promise<Array<GetPosts>> => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data.data
}
export const getCommentsPromise = async(params: {
    postId: number
}): Promise<Array<GetComments>> => {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`)
    return data.data
}