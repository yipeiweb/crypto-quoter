import { useState } from 'react'
import SelectMoneyView from './SelectMoneyView'

const useSelectMoneys = (label, options) => {
    const [state, setState] = useState('')

    const selectMoneys = () => (
        <SelectMoneyView labelText={label} options={options}
            state={state} setState={setState}/>
    )

    return [state, selectMoneys]
}

export default useSelectMoneys