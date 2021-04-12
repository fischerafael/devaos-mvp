import React, { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
    href: string
    children: ReactNode
    [x: string]: any
}

const CustomLink = ({ href, children, ...rest }: Props) => {
    return (
        <Link href={href}>
            <a {...rest}>{children}</a>
        </Link>
    )
}

export default CustomLink
