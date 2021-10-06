import React,{useContext} from 'react'
import { ContextDa } from '../../../App'
function NodeContext() {
    const context = useContext(ContextDa)
    return (
      <div>
        <p>{context.test}</p>
        <button onClick={context.change}>
          Change Text
        </button>
      </div>
    );
}

export default NodeContext
