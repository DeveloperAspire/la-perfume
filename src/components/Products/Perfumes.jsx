import React from 'react'
import PerfumeItem from './PerfumeItem'

import classes from './Perfumes.module.css'

function Perfumes() {
      return (
        <div className={classes.display}>
          <PerfumeItem />
          <PerfumeItem />
          <PerfumeItem />
        </div>
      );
}

export default Perfumes
