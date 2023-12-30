import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function myApp (){
    return(
        <h1>this is for testing fuction just for fun !</h1>
    )
   
}

// const reactElement = {
//     type: 'a',
//     Props:{
//         href: 'https://google.com',
//         target: '_black'
//     },
//     children: 'Click me to visit google'
//  }
// const ReactElement = (<a href="http://google.com" target='_blank'> Click me to visit google</a>)
const anotherUser = " main aur tum !"

const reactElement = React.createElement(
    'a',
    {
        href:'http://google.com',
        target:'_blank'
    },
    'visit to google ',
    anotherUser
)





ReactDOM.createRoot(document.getElementById('root')).
render(
  
    //  myApp (),
    //   ReactElement
    reactElement
    

)
