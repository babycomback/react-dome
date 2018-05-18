import React from 'react'

import './style.less'

class ListItem extends React.Component {
	constructor(props,context){
		super(props,context)
	}
    render() {
         const data = this.props.data;
        return (
            <div className="listItem" onClick={this.clickHandle.bind(this)}>
                <div className="clear-fix">
                    <div className="fl">
                        <img className="fl avatar" src={data.avatar}/>
                        <div className="fl">
                            <div>{data.nickName}</div>
                            <div className="color">{data.createTime}</div>
                        </div>
                    </div>
                    <div className="fr color">阅读{data.browseTotal}</div>
                </div>
                <div className="postTitle">{data.postTitle}</div>
                <div className="postImage">
                    <img src={data.postImage}/>
                </div>
                <div className="color">{data.postDigest}</div>
                <div className="color">{data.bumpTotal}评论 {data.likeTotal} 点赞</div>
            </div>
        )
    }
    clickHandle(url){
        // postId=2431&readNum=阅读670&islike=0&isfavorite=0
        // var href = 
        // this.history.push(url)
    }
    
}
export default ListItem
