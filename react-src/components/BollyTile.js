import React from 'react'

export default function BollyTile(props) {
  return (
<<<<<<< HEAD
    <div className='chances-left'>
      <h1>
        <div data-testid="B" className={"badge " + (props.wrongGuesses > 0 ? "bg-secondary sk" : "bg-success") + " mx-2"}>B</div>
        <div data-testid="O" className={"badge " + (props.wrongGuesses > 1 ? "bg-secondary sk" : "bg-success") + " mx-2"}>O</div>
        <div data-testid="L" className={"badge " + (props.wrongGuesses > 2 ? "bg-secondary sk" : "bg-success") + " mx-2"}>L</div>
        <div data-testid="L" className={"badge " + (props.wrongGuesses > 3 ? "bg-secondary sk" : "bg-success") + " mx-2"}>L</div>
        <div data-testid="Y" className={"badge " + (props.wrongGuesses > 4 ? "bg-secondary sk" : "bg-success") + " mx-2"}>Y</div>
        <br />
        <div data-testid="W" className={"badge " + (props.wrongGuesses > 5 ? "bg-secondary sk" : "bg-success") + " mx-2"}>W</div>
        <div data-testid="O" className={"badge " + (props.wrongGuesses > 6 ? "bg-secondary sk" : "bg-success") + " mx-2"}>O</div>
        <div data-testid="O" className={"badge " + (props.wrongGuesses > 7 ? "bg-secondary sk" : "bg-success") + " mx-2"}>O</div>
        <div data-testid="D" className={"badge " + (props.wrongGuesses > 8 ? "bg-secondary sk" : "bg-success") + " mx-2"}>D</div>
=======
    <div>
      <h1>
        <div className={"badge " + (props.wrongGuesses > 0 ? "bg-secondary sk" : "bg-success") + " mx-2"}>B</div>
        <div className={"badge " + (props.wrongGuesses > 1 ? "bg-secondary sk" : "bg-success") + " mx-2"}>O</div>
        <div className={"badge " + (props.wrongGuesses > 2 ? "bg-secondary sk" : "bg-success") + " mx-2"}>L</div>
        <div className={"badge " + (props.wrongGuesses > 3 ? "bg-secondary sk" : "bg-success") + " mx-2"}>L</div>
        <div className={"badge " + (props.wrongGuesses > 4 ? "bg-secondary sk" : "bg-success") + " mx-2"}>Y</div>
        <br />
        <div className={"badge " + (props.wrongGuesses > 5 ? "bg-secondary sk" : "bg-success") + " mx-2"}>W</div>
        <div className={"badge " + (props.wrongGuesses > 6 ? "bg-secondary sk" : "bg-success") + " mx-2"}>O</div>
        <div className={"badge " + (props.wrongGuesses > 7 ? "bg-secondary sk" : "bg-success") + " mx-2"}>O</div>
        <div className={"badge " + (props.wrongGuesses > 8 ? "bg-secondary sk" : "bg-success") + " mx-2"}>D</div>
>>>>>>> cf83e39e57c96d0b446943a013acfe9e8db05f80
      </h1>
    </div>
  )
}
