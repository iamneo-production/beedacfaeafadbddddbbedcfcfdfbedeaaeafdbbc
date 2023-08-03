import React from 'react'

const Button = ({children, onClick, disabled}) => {
    return (
        <Button onClick = {onClick} disabled = {disabled}>{children}
        </Button>
    )
}

export default Button;