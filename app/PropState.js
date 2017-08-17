/**state and props
 * React uses state and props to struct a component model
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
/**
 * 数据源: state + props
 * props: parent ==> child 【pure不能修改】
 * state: 自身维护的数据状态
 */
export default class PropState extends Component{
    constructor(){
        super();
        this.state={a:'I am state', b: '会被替换吗'}
    }
    click(){
        /**
         * setState ==> 本组件重新render
         */
    	this.setState({
    		a:'我更新啦 哈哈哈'
    	})
    }

    render(){
        return (
		<div onClick={() => this.click()}>
           	     {this.state.a}
                </div>
		)
    }
 }



/**
 * JSX : xml in JavaScript
 * 1、tagName
 * 2、attributes(props)
 * 3、children
 */
/**
 * 组件化: 
 * 1、函数式组件props => JSX ; 
 * 2、类组件:class A extends Component;
 */ 
/**
 * 数据源 : state  + props
 * 更新数据: setState
 * 方案: 当数据越来越复杂的时候，我们需要一个数据解决方案 ==> redux
 * 发起数据变更(click etc.) ==> action
 * 生成新的数据结构(state[store])  ==> redux的reducer生成react的state
 * 渲染(render) ==> react来做
 */







