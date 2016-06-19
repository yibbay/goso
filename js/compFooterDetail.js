/**
 * Created by Administrator on 2016/6/19.
 */
var React = require('react');

var CompDetailFooter = React.createClass({
    render: function () {
        return (
            <div style={this.CSS.flex}>
                <div style={this.CSS.item}>
                    介绍
                </div>
                <div style={this.CSS.item}>
                    详情
                </div>
                <div style={this.CSS.item}>
                    实拍
                </div>
            </div>
        )
    }
});
CompDetailFooter.prototype.CSS = {
    flex: {
        width:'100%',
        display: 'flex',
        height:'1rem',
        position:'fixed',
        left:'0',
        bottom:'0',
        lineHeight:'1rem',
        textAlign:'center'
    },
    item:{

        fontWeight:'bold',
        color:'white',
        fontSize:'0.5rem',
        background:'#56555d',
        flexGrow:'1',
        borderRight:'1px solid #636363'
    }

};

module.exports = CompDetailFooter;