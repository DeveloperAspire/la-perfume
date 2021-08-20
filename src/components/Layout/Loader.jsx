import React from 'react'

import classes from './Loader.module.css'

const Loader = ()=> {
       return (
         <div className={classes.wrapper}>
           <div className={classes.roller}>
             <div></div>
             <div></div>
             <div></div>
             <div></div>
             <div></div>
             <div></div>
             <div></div>
             <div></div>
           </div>
         </div>
       );
}

export default Loader