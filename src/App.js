import React from 'react';
import Square from './components/Square'
import boxes from './boxes'
import SquareClass from "./components/SquareClass";

export default function App() {

  return (
    <div>
      <main>
        <h1>Boxes will go here</h1>
        {
          boxes.map((box) => {
            return (
              <SquareClass
                key={box.id}
                box={box}
              />
            )
          })
        }
      </main>
    </div>
  )
}
