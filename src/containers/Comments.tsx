import React, { Component } from 'react'
import debounce from 'lodash/debounce'
import { getCommentsPromise } from '../fetch'
import { GetComments } from '../types'
const styles = require('./Comments.css')

interface Props {
    postId: number
}

export class Comments extends Component<Props> {
    state = {
        show: false,
        comments: [],
    }
    handleOnClick = debounce(() => {
        if (!this.state.show) {
            getCommentsPromise({
                postId: this.props.postId,
            }).then((data: Array<GetComments>) => {
                this.setState({
                    comments: data,
                    show: true,
                })
            }).catch(e => {
                this.setState({
                    show: false,
                })
                console.log(e)
            })
        }
        else {
            this.setState({
                show: false,
            })
        }
    }, 300)
    render() {
        const { show, comments } = this.state
        return (
            <>
                <div className={styles.container}>
                    {show && comments && comments.map((e: GetComments) => (
                        <div key={e.id} className={styles.comment}>
                            <div className={styles.email}>{e.email}</div>
                            <div className={styles.content}>{e.body}</div>
                        </div>
                    ))}
                </div>
                <div className={styles.click} onClick={this.handleOnClick}>
                    {this.state.show ? 'hide comment' : 'show comment'}
                </div>
            </>
        )
    }
}

export default Comments
