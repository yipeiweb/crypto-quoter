import styledComponents from "../../styledComponents/error.styles"

const Error = ({text}) => {
  const {Text} = styledComponents
  
  return (<Text>{text}</Text>)
}

export default Error