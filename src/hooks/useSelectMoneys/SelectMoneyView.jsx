import styledComponents from '../../styledComponents/useSelectMoneys.styles'

const SelectMoneyView = ({ labelText, options, state, setState}) => {
  const {Label, Select} = styledComponents

  return (
      <>
        <Label>{labelText}</Label>
        <Select value={state} 
          onChange={e => setState(e.target.value)}>
            <option value="">Seleccione</option>
            { options.map(option => (
              <option key={option.id} value={option.id}>{option.name}</option>
            ))}
        </Select>
      </>
  )
}

export default SelectMoneyView