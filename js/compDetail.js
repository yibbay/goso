//引入依赖模块
var React = require('react');
var ReactDOM = require('react-dom');
var CompDetailFooter = require('./compFooterDetail');

//商品详情组件布局开始
var CompDetail = React.createClass({

    render: function () {
        //console.log(this.props.goodsListImg);
        return (
            <div >
                <div style={this._css.yellow} className="detail-header">
                    <div style={this._css.left}>
                        <img style={this._css.leftimg} src="img/jian.png" alt=""/>
                    </div>
                    <h4 style={this._css.h4}>商品介绍</h4>
                    <div style={this._css.right}>
                        <img style={this._css.rightimg} src="img/share.png" alt=""/>
                    </div>
                </div>
                <div style={this._css.countdown} className="count-down">
                    <CompDetailTimeDown />
                </div>
                <div className="goods-detail">
                    <CompDetailItem data={this.props}/>
                </div>
                <div >
                    <CompDetailFooter />
                </div>
            </div>
        )
    }

});
//商品详情组件布局结束

//商品详情图片子组件开始
var CompDetailItem = React.createClass({

    render: function () {
        //console.log(this.props.data);
        return (
            <div>
                <div style={this.CSS.gImgContainer}>
                    <img style={this.CSS.goodsImg} src={this.props.data.goodsListImg} alt=""/>
                </div>
                <div style={this.CSS.gImgContainer}>
                    <img className="img-goods" src="img/31.png" alt=""/>
                </div>
                <div className="goods-price">
                    <span>市场价：</span>
                    <span style={this.CSS.spanDecoration}>￥{this.props.data.price}</span> &nbsp;
                    <span>{this.props.data.discount}</span>折&nbsp;&nbsp;&nbsp;
                    <span>{this.props.data.buynumber}</span>人购买
                </div>
            </div>
        )
    }
});
//商品详情图片子组件结束

//商品详情倒计时子组件开始
var CompDetailTimeDown = React.createClass({
    getInitialState: function () {
        var date = new Date();
        var days = date.getDate();
        var hours = date.getHours();
        var mi = date.getMinutes();
        var s = date.getSeconds();


        return {
            timedown: '倒计时:' + (30 - days) + '天' + (23 - hours) + '时' + (59 - mi) + '分' + (59 - s) + '秒',// 主要看分钟数，分钟为9则写8；
            setDay: 30,
            setHours: 23,
            setMin: 59
        }
    },
    render: function () {
        var _this = this;

        setTimeout(function () {
            var date = new Date();
            var days = date.getDate();
            var hours = date.getHours();
            var mi = date.getMinutes();
            var s = date.getSeconds();
            _this.setState({
                timedown: '倒计时:' + (_this.state.setDay - days) + '天' + (_this.state.setHours - hours) + '时' + (_this.state.setMin - mi) + '分' + (59 - s) + '秒',// 主要看分钟数，分钟为9则写8；
            });

            var timer = setTimeout(arguments.callee, 1000);
            if (23 - hours < 0 || 59 - mi < 0) {//这个判断还是要想清楚,这样或许更好，再加个天数也更好
                _this.setState({
                    timedown: '倒计时:' + (0) + '天' + (0) + '时' + (0) + '分' + (0) + '秒',// 主要看分钟数，分钟为9则写8；
                });
                clearTimeout(timer);
            }
        }, 1000);
        return (
            <div>
                距离结束时间: <span>{this.state.timedown}</span>
            </div>
        )
    }


});
//商品详情倒计时子组件结束

//布局组件css
CompDetail.prototype._css = (function () {

    return {
        yellow: {
            background: '#E4356A',
            position: 'relative',
            textAlign: 'center',
            lineHeight: '1rem'

        },
        h4: {
            width: '100%',
            height: '1rem',
            color: 'white',
            fontSize: '0.32rem'
        },
        left: {
            position: 'absolute',
            left: '0.2rem',
            top: '0.33rem'

        },
        leftimg: {
            height: '0.3rem'
        },
        right: {
            position: 'absolute',
            right: '0.2rem',
            top: '0.29rem'

        },
        rightimg: {
            height: '0.5rem'
        },
        countdown: {
            width: '100%',
            height: '1rem',
            background: '#333333',
            fontSize: '0.33rem',
            color: 'white',
            textAlign: 'center',
            lineHeight: '1rem'
        }
    }

})();

CompDetailItem.prototype.CSS = {
    gImgContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: '0.3rem 0'
    },
    goodsImg: {
        height: '4rem',
        display: 'block',
        width: '75%',
        border: '1px solid #ccc'
    },
    tabImg: {},
    spanDecoration:{
        textDecoration:'line-through'
    }

};
module.exports = CompDetail;
