import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import Counter from './components/Counter'
import counter from './reducers'


// 整理执行流程

// 1. 使用createStore(counter) 去创建了一个store，并传入reducer，
//    这里的reducer是counter
// 2. 当按下 按钮-加 或 按钮-减 时，说明有事件产生，所以需要对state进行改变；
//    在redux中，我们不直接对state进行改变，而是通过dispatch分发actions来处理，
//    也就是给dispatch传递一个actions（其实就是一个对象），而actions里面
//    有一个默认的属性: type，这个type就可以定义我们当前执行了什么操作；在这个例子中，
//    我们就只有两个操作：加 和 减，因此，我们就定义了两种action，分别为：
//    { type: 'INCREMENT' } 和 { type: 'DECREMENT' } ，这是第二步；
//    注意：actions 只是描述状态发生了改变，但是应用程序接下来怎么操作，不是它关心的，
//          这是reducer的事情
// 3. 当执行完dispatch之后，也就是我们的actions发送出去之后，我们肯定是需要别人回应，
//    不然我们干嘛发送actions，所以，在redux中，当我们执行完dispatch之后，redux会自动去
//    执行reducer函数，同时会将当前的state和我们发送的actions传入到reducer函数中，
//    reducer函数根据actions中的type属性来决定要“执行怎样的操作”（其实就是返回一个新的
//    state），返回的新的state将store中的state更新。
//    注意：reducer是一个纯函数，也就是说同样的输入，得到相同的输出，而且没有任何可观察到的
//    副作用；所以在reducer中，我们是返回一个新的state，而不是改变当前state，reducer函数的
//    设计，参考：http://redux.js.org/docs/basics/Reducers.html

// 4. 当执行完reducer之后，state的状态被更新，这时就会执行store.subscibe(listener)，
//    也就是说一旦state更新，就会执行store.subscribe，注意：这里说的执行store.subscribe，
//    其实是执行其中的listener函数，可以这么理解：假设我们使用store.subscribe()注册了很多
//    监听函数，如：store.subscibe(listener1)，store.subscibe(listener2)，
//    store.subscibe(listener3)，可以假想是将listener1、listener2和listener3放到一个数组中，
//    当state改变时，redux会从这个数组中将listener1、listener2和listener3拿出来，依次执行。
//    在该函数中，我们监听的是render函数，也就是当state改变时，我们就刷新页面；

// 5. 在Counter组件中，传入state作为value值，state的获取是通过store.getState()来实现的，
//    通过这几个过程就实现了 加 减 数值的功能；
// 6. 总结下流程：a. 首先创建一个store（createStore）
//                b. 定义reducer函数，reducer函数决定了我们需要哪些actions
//                c. 为不同的操作，定义不同的actions，然后使用store.dispatch(actions)分发
//                d. 绑定监听对象，我们这里绑定的是render()函数
//                e. 完成




// counter ==== reducer
const store = createStore(counter, applyMiddleware(logger))
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    // 当点击时分发一个action，然后store会自动调用reducer，
    // 并传入两个参数：当前的state和action，action决定了要执行哪个行为，
    // reducer执行完成后，返回一个新的state
    // 该action会被store的reducer
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

function clicked() {
  console.log('clicked');
}

render()
// 设置store的监听函数为render，state的每次改变，都会去执行subscribe；
// 注意：这里说的执行subscribe，简单的理解就是当state的改变时，去查询
// 使用store.subscribe注册了哪些函数，然后去执行它们，例如下面我使用subscribe注册了
// render和clicked，那么当state改变时就去执行这两个函数
store.subscribe(render);







