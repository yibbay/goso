/**
 * Created by Administrator on 2016/6/19.
 */
//window resize
//document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
//window.addEventListener("resize", function () {
//    document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
//}, false);


var React = require('react'),
    ReactDOM = require('react-dom');

var ComponentLayout = require('./comLayout');
ReactDOM.render(<ComponentLayout/>, document.body);

var ComponentHeader = require('./compheader');
//console.log(ComponentHeader);
//console.log(document.getElementById("header"));
ReactDOM.render(<ComponentHeader/>, document.getElementById("header"));

var ComponentSearch = require('./compSearch');
ReactDOM.render(<ComponentSearch/>, document.getElementById("search"));

var ComponentBanner = require('./compBanner');
ReactDOM.render(<ComponentBanner/>, document.getElementById("banner"));

var ComponentList = require('./compList');
ReactDOM.render(<ComponentList/>, document.getElementById("list"));

var ComponentFooter = require('./compFooter');
ReactDOM.render(<ComponentFooter/>, document.getElementById("footer"));
