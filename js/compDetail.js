var React = require('react');
var ReactDOM = require('react-dom');

var CompDetail = React.createClass({

    render: function () {

        return (
            <div style={this._css.yellow}>
                <div className="detail-header">
                    <div style={this._css.left}>
                        <img style={this._css.leftimg} src="img/jian.png" alt=""/>
                    </div>
                    <h4 style={this._css.h4}>商品介绍</h4>
                    <div style={this._css.right}>
                        <img style={this._css.rightimg} src="img/share.png" alt=""/>
                    </div>
                </div>
                <div className="count-down">
                    距离结束时间: <span></span>
                </div>
                <div className="goods-detail"></div>
                <div className="detail-nav"></div>
            </div>
        )
    }

});

CompDetail.prototype._css = (function () {

    return {
        yellow:{
          background:'#E4356A',
            position:'relative',
            textAlign:'center',
            lineHeight:'1rem'

        },
        h4:{
            width:'100%',
            height:'1rem',
            color:'white',
            fontSize:'0.42rem',
        },
        left:{
            position:'absolute',
            left:'0.2rem',
            top:'0.33rem'

        },
        leftimg:{
            height:'0.3rem'
        },
        right:{
            position:'absolute',
            right:'0.2rem',
            top:'0.29rem'

        },
        rightimg:{
            height:'0.5rem'
        }

    }

})();


module.exports = CompDetail;
