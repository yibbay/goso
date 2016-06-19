/**
 * Created by Administrator on 2016/6/17.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var CompList = require('./compList.js');
var CompBanner = require('./compBanner');
var CompList = require('./compList');

/**声明页面搜索框  开始**/
var ComponentSearch = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://datainfo.duapp.com/shopdata/selectGoodes.php?selectText='
		}
	},
	handleChange:function(e){
		var _that =this;
		var _text = e.target.value;
		$.ajax({
			type:'get',
			dataType:'jsonp',
			url:_that.props.url+_text,
			success:function(data){
				//console.log(<CompList/>)
				
				if(_text===''){
					ReactDOM.render(<CompBanner/>,document.querySelector('#banner'));
					ReactDOM.render(<CompList/>,document.querySelector('#list'))
				}else{
					ReactDOM.unmountComponentAtNode(document.querySelector('#banner'));
				    ReactDOM.unmountComponentAtNode(document.querySelector('#list'));
				    
				    ReactDOM.render(<CompList name={data}/>,document.querySelector('#list'))
				}
				
			}
		})
	},
    render: function () {
        var _style = this.CSS;
        var _img = "img/search-img.png";
        return (
            <div>
                <section style={_style.search}>
                    <div style={_style.searchbox}>
                        <img style={_style.searchimg} src={_img}/>
                        <input onChange={this.handleChange} style={_style.searchinput} type="text" placeholder="请输入搜索内容"/>
                    </div>
                </section>
            </div>
        );
    }
});
ComponentSearch.prototype.CSS = {
    search: {
        width: "100%",
        height: "0.88rem",
        backgroundColor: "rgb(82,82,90)",
        overflow: "hidden"
    },
    searchbox: {
        width: "5.9rem",
        height: "0.54rem",
        backgroundColor: "#FFFFFF",
        borderRadius: "0.27rem",
        margin: "0.2rem auto",
        overflow: "hidden"
    },
    searchimg: {
        display: "block",
        float: "left",
        width: "0.44rem",
        height: "0.46rem",
        marginLeft: "0.12rem",
        marginTop: "0.07rem"
    },
    searchinput: {
        display: "block",
        float: "left",
        marginLeft: "0.13rem",
        width: "4.97rem",
        height: "0.46rem",
        border: "none",
        outline: "none",
        fontSize: "0.24rem",
        lineHeight: "0.46rem",
        marginTop: "0.07rem",
        color: "rgb(82,82,90)"
    }

};


/**声明页面搜索框  结束**/
module.exports=ComponentSearch;