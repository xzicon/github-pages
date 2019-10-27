import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Icon} from 'antd';
import './Todoing.css'
export default class Todoing extends Component {
    render() {
        return (
            <div id='root1' /*style={{ height: '900px' }}*/>
                
                <div id='root2' /*style={{ height: '60px', width: '650px' }}*/>
                    <h2>正在进行</h2>
                    <span>
                        {this.props.todo.length===0?0:this.props.todo.length}
                    </span>

                </div>
                <ol className="demo-box" >
                    {this.props.todo.map((item, idx) =>
                        <div id='root3'>
                            <li key={idx}>
                                <input type='checkbox'  draggable='true' name='' id='check' onChange={() => this.props.delTodo(idx)} />
                                {item}
                            </li>
                            <Icon id='root4' type="smile"></Icon>
                            <button onClick={()=>this.props.del(idx)} style={{float:'right',marginTop:'-30px'}}>删除</button>
                        </div>
                    )}
                </ol>
                <div id="root5">
                    <h2>已经完成</h2>
                    <span>
                        {this.props.todo1.length===0?0:this.props.todo1.length}
                    </span>
                </div>
                <ol className="demo-box">
                    {this.props.todo1.map((item1, idx1) =>
                        <div id='root6'>
                            <li key={idx1}>
                                <input type='checkbox' checked name='' id='check' onClick={() => { this.props.addtodo1(idx1) }} />
                                {item1}
                            </li>
                            <Icon id='root7' type="smile"></Icon>
                            <button id='root8' onClick={()=>this.props.del1(idx1)}>
                                删除
                            </button>
                        </div>
                    )}
                </ol>
                <footer>Copyright © 2014 todolist.cn&nbsp;&nbsp;
                  <a href="javascript:clear();">clear</a>
                </footer>
            </div>

        )
    }
}
Todoing.propTypes = {
    todo: PropTypes.array,
    todo1: PropTypes.array
}
Todoing.defaultProps = {
    todo: [2, 3, 4],
    todo1: [2],
    a: 100
}