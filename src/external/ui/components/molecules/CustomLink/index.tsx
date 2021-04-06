import React, { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
    href: string
    children: ReactNode
}

const CustomLink = ({ href, children }: Props) => {
    return (
        <Link href={href}>
            <a
                style={{
                    textDecoration: 'none'
                }}
            >
                {children}
            </a>
        </Link>
    )
}

export default CustomLink
