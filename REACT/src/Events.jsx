function Events()
{
    function press(e)
    {
        alert ("wrong key pressed"+e.key)
    }
    return (
        <>
        <div>
            <button onMouseOver={()=>alert("jerry Files.")}> jerry </button>
            <button onMouseLeave={()=>alert("tom has a problem.")}> tom   </button>
             <input type="text" onKeyDown={press}/>
        </div>
        <input onFocus={()=>console.log("Input focused")}/>
        <input onBlur={()=>console.log("Input blurred")}/>
        </>
    )
}export default Events;