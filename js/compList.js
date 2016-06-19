/**
 * Created by Administrator on 2016/6/17.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var CompDetail = require('./compDetail');

/**声明页面list  开始**/
var ComponentList = React.createClass({
    getDefaultProps: function () {
        return {
            source: 'http://datainfo.duapp.com/shopdata/getGoods.php'
        }
    },
    getInitialState: function () {
        return {
            list: []
        }
    },
    componentWillMount: function () {
        var that = this;
        $.ajax({
            url: this.props.source,
            dataType: 'jsonp',
            async: false,
            success: function (data) {
                that.setState({list: data});
            }
        });
    },
    render: function () {
        var _css = ComponentListCSS;
        var lists = this.state.list;
        var temp = [];
        var  list = this.props.name;
        //console.log(list)
         if(!list){
         	
         }else{
         	lists=list;
         }
        
        lists.forEach(function (value, index) {
            temp.push(<ComponentListItem {...value}/>);
            //console.log(value)
        });
        return (
            <div style={_css.paddingbottom}>
                <div style={_css.list}>
                    {temp}
                </div>
            </div>
        );
    }
});
var ComponentListItem = React.createClass({
	handleClick:function(e){
		var _this = this;
		ReactDOM.unmountComponentAtNode(document.body);

        var url = 'http://datainfo.duapp.com/shopdata/getGoods.php?goodsID=';
		$.ajax({
			type:'get',
			dataType:'jsonp',
			url:url+_this.props.goodsID,
			success:function(data){
				console.log(data);
				
				ReactDOM.render(<CompDetail />,document.body);
			}
		})
		
	},
    render: function () {
        var _css = ComponentListCSS;
        var name =this.props.goodsName;
        if(name.length>10){
            name = name.slice(0,10)+'....';
        }
        return (
            <div style={_css.listitem} onClick={this.handleClick}>
                <div style={_css.listimg}>
                    <img style={_css.img} src={this.props.goodsListImg}/>
                </div>
                <div style={_css.itemdesc}>
                    <div style={_css.goodsName}>{name}</div>
                    <div style={_css.goodsPrice}>￥<span>{this.props.price}</span></div>
                    <div style={_css.goodsDiscount}>{this.props.discount}</div>
                    <div style={_css.goodsImg}>
                        <img style={_css.goodsimg} src="img/shopcar.png"/>
                    </div>
                </div>
            </div>
        )
    }
});
var ComponentListCSS = {
    list: {
        width: "100%",
        bottom: "1rem"
    },
    listitem: {
        width: "100%",
        height: "2.2rem",
        borderBottom: "2px solid rgb(171,171,171)"
    },
    listimg: {
        float: "left",
        width: "1.76rem",
        height: "1.76rem",
        marginTop: "0.2rem",
        marginLeft: "0.15rem",
        overflow: "hidden"
    },
    img: {
        display: "block",
        width: "100%",
        height: "100%",
    },
    itemdesc: {
        float: "left",
        width: "4.1rem",
        height: "1.76rem",
        marginTop: "0.2rem",
        marginLeft: "0.2rem",
        position: "relative"
    },
    goodsName: {
        fontSize: "0.3rem",
        color: "#acacac",
        fontWeight: "600",
        marginTop: "0.2rem"
    },
    goodsPrice: {
        fontSize: "0.28rem",
        color: "rgb(251,169,192)",
        fontWeight: "600",
        marginTop: "0.2rem"
    },
    goodsDiscount: {
        fontSize: "0.28rem",
        color: "#000000",
        fontWeight: "600",
        marginTop: "0.2rem"
    },
    goodsImg: {
        float: "left",
        width: "1.2rem",
        height: "0.54rem"
    },
    goodsimg: {
        display: "block",
        width: "1.2rem",
        height: "0.54rem",
        position: "absolute",
        right: "0.1rem",
        bottom: "0rem"
    },
    paddingbottom: {
        'padding-bottom': '1rem'
    }

};
/**声明页面list  结束**/

module.exports=ComponentList;