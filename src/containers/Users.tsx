import React, { Component } from 'react'
import { getUsersPromise, getPostsPromise, getCommentsPromise } from '../fetch'
import Posts from './Posts'
const styles = require('./Users.css')

export class Users extends Component {
	state = {
		userDatas: [],
	}
	componentDidMount() {
		(async () => {
			const userDatas = await getUsersPromise()
			console.log(userDatas, 'data')
			this.setState({
				userDatas,
			})
		})()
	}
	render() {
		const { userDatas } = this.state
		if (!userDatas) {
			return null
		}
		return (
			<div className={styles.container}>
				<Posts userInfo={userDatas[0]} />
			</div>
		)
	}
}

export default Users
