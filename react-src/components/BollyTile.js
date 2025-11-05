import React from 'react'

export default function BollyTile(props) {
  return (
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
      </h1>
    </div>
  )
}
