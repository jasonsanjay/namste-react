#namste react

#parcel
 -Dev build
 -local server
 -HMR -hot module Replacement
 -File watching algorithm - which is written in c++
 -Caching- faster builds
 -

 #jsx
 -jsx => React.createElement - which is a js object => HtmlElement(render) using babel code gets converted 


#different types of calling a functions (episode-3):
 const Title = () =>(
    <h1>this is title functional compoentn</h1>
)

const elem = <h1>this is react element</h1>

const number= 1000
const Heading = () => {
 return   (
    <div className="container">
        {number}
        {elem}
        <Title/>
        <Title></Title>
        {Title()}
        <h1>this is functional compoentn11</h1>
    </div>
)
}
root.render(<Heading/>);