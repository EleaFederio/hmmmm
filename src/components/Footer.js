import React from 'react'
import { Container } from 'react-bootstrap'

const FooterComponent = () => {


    return(
        <footer className={'footer'} style={{position: "relative", background: '#212529', marginTop: '-90', height: '90', clear: 'both', paddingTop: '20px', marginBottom: 'auto'}}>
            <Container className={'text-center'} >
                <span style={{color: 'white'}}>Footer Daw yaa</span>
            </Container>
        </footer>
    )

}

export default FooterComponent;