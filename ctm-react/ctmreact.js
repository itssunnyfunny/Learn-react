 function customRender(reactElement, root){
    // const domElement =  document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.Props.href)
    // domElement.setAttribute('target',reactElement.Props.target)
    // root.appendChild(domElement);

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    
   for (const Prop in reactElement.Props) {
    if(Prop==='children')continue;

    domElement.setAttribute(Prop, reactElement.Props[Prop])
   }

   root.appendChild(domElement);
 }

 
 const mainroot = document.querySelector('#root')

 const reactElement = {
    type: 'a',
    Props:{
        href: 'https://google.com',
        target: '_black'
    },
    children: 'Click me to visit google'
 }

  customRender(reactElement,mainroot)

