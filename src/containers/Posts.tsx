import React, { Component } from 'react'
import Comments from './Comments'
import { getPostsPromise } from '../fetch'
import { GetUsers, GetPosts } from '../types'
const styles = require('./Posts.css')

interface Props {
    userInfo: GetUsers,
    
}
export class Posts extends Component<Props> {
    static defaultProps = {
        userInfo: {}
    }
    state = {
        postDatas: []
    }
    componentDidMount() {
        (async () => {
            const postDatas = await getPostsPromise()
            console.log(postDatas, 'data')
            this.setState({
                postDatas,
            })
        })().catch((e) => {
            console.log(e)
        })
    }
    render() {
        const { postDatas } = this.state
        if (!postDatas) {
            return null
        }
        return postDatas.length > 0 && postDatas.filter((e: GetPosts) => e.userId === this.props.userInfo.id).map((e: GetPosts) => (
            <div
                key={e.id}
                className={styles.post}
            >
                <div className={styles.title}> {e.title} </div>
                <div className={styles.content}> {e.body} </div>
                <div className={styles.email}> {this.props.userInfo.email} </div>
                <Comments postId={e.id} />
            </div>
        ))
    }
}

export default Posts
