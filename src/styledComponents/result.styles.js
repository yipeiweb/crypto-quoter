import styled from "@emotion/styled"

const Container = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Image = styled.img`
    display: block;
    width: 120px;
`

const Text = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Price = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`
export default {Container, Text, Image, Price}