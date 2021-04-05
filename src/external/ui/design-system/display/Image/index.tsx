import React from 'react'

interface Props {
    url: string
    alt: string
    [x: string]: any
}

const Image = ({ url, alt, ...rest }: Props) => {
    return <img src={url} alt={alt} {...rest} />
}

export default Image
