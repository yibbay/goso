var React = require('react'),
    ReactDOM = require('react-dom');

/**声明这个页面的布局容器  开始**/
var ComponentLayout = React.createClass({
    render: function () {
        return (
            <div>
                <div id="header"></div>
                <div id="search"></div>
                <div id="banner"></div>
                <div id="list"></div>
                <div id="footer"></div>
            </div>
        );
    }
});
/**声明这个页面的布局容器  结束**/

//ReactDOM.render(<ComponentLayout/>, document.body);
//
//var ComponentHeader = require('./compheader');
////console.log(ComponentHeader);
////console.log(document.getElementById("header"));
//ReactDOM.render(<ComponentHeader/>, document.getElementById("header"));
//
//var ComponentSearch = require('./compSearch');
//ReactDOM.render(<ComponentSearch/>, document.getElementById("search"));
//
//var ComponentBanner = require('./compBanner');
//ReactDOM.render(<ComponentBanner/>, document.getElementById("banner"));
//
//var ComponentList = require('./compList');
//ReactDOM.render(<ComponentList/>, document.getElementById("list"));
//
//var ComponentFooter = require('./compFooter');
//ReactDOM.render(<ComponentFooter/>, document.getElementById("footer"));



//window resize
document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
window.addEventListener("resize", function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
}, false);

module.exports=ComponentLayout;