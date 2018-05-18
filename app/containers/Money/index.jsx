import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import MoneyList from '../../components/MoneyList'
import { MoneyListData } from '../../fetch/MoneyList/MoneyList'

class Money extends React.Component {
	constructor(props, context){
		super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
            fixedData:[],
            noviceData:[],
            FixedData:'',
            FixedData:'',
            FixedData:'',
			FixedData:'',
		}
	}
    render() {
        return (
            <MoneyList FixedData={this.state.fixedData} noviceData={this.state.noviceData}></MoneyList>
        )
    }
    componentDidMount(){
    	var data = {
    		'week14':0
    	}
    	const result = MoneyListData(data);
    	result.then(res => {
    		return res.json()
    	}).then(json => {
    		const data = json;
            console.log(data)
    		if(data.code == 1){
    			this.setState({
                    fixedData:data.data.regularList.regularListDetail,
    				noviceData:data.data.mapNewprodList2.newProdListDetail
    			})
    		}
    	}).catch(ex => {
    		 if (__DEV__) {
                console.error('理财列表页数据错误, ', ex.message)
            }
    	})
    }
}
export default Money
