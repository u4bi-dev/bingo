import React from 'react'

import BingoScore from './BingoScore'
import BIngoTable from './BingoTable'

export default ({ type }) => (
    <section>

        <BingoScore />

        <BIngoTable type={ type } rowSize={ 5 } cellSize={ 5 } />

    </section>
)