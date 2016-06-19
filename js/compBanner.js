/**
 * Created by Administrator on 2016/6/17.
 */
var React = require('react');
//var ReactDOM = require('react-dom');
/**声明页面banner  开始**/
var ComponentBanner = React.createClass({
    getInitialState:function(){
        return {
            banner:[]
        }
    },
    componentWillMount:function(){
        var that =this;
        $.ajax({
            url:'http://datainfo.duapp.com/shopdata/getBanner.php',
            dataType:'jsonp',
            async:false,
            success:function(data){
                that.setState({
                    banner:data
                })
            }
        })
    },
    render: function () {
        var _style = this.CSS;
        var temp = [];
        this.state.banner.forEach(function(value,index){
            //console.log(value)
            temp.push(<ComponentBannerItem {...value}/>)
        });
        return (
            <div style={_style.banner}>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {temp}
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination"></div>
                </div>


            </div>
        );
    }
});
var ComponentBannerItem = React.createClass({

    render: function () {
        var prop =JSON.parse(this.props.goodsBenUrl)[0];
        var img = {
            display: "block",
            width: "100%",
            height: "2.5rem"
        };
        return (
            <div className="swiper-slide">
                <img style={img} className="swiper-img" src={prop} />
            </div>
        )
    },
    componentDidMount:function(){
        var mySwiper = new Swiper('.swiper-container',{
            pagination : '.swiper-pagination',
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            autoplay:2000,

        })
    }

});

ComponentBanner.prototype.CSS = {
    banner: {
        width: "100%",
        height: "2.5rem"
    },

};
/**声明页面banner  结束**/

module.exports=ComponentBanner;
