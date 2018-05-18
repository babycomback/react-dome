import React from 'react'
import  { accountData } from '../../fetch/Account/Account'


import AccountHeader from '../../components/AccountHeader'
import Footer from '../../components/footer'

class Account extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state = {
			data:''
		}
	}
    render() {
        return (
            <div>
            {
            	this.state.data != ''
            	? <AccountHeader data={this.state.data}/> 
            	: <div>加载中</div>
            }
           		<Footer/>
            </div>

        )
    }

    componentDidMount(){
		var result = accountData();
		result.then(res => {
			return res.json()
		}).then(json => {
			const data = json;
			console.log(data.data)
			if(data.code == 1){
				this.setState({
					data:data.data
				})
			}
		})
	}
}
export default Account
