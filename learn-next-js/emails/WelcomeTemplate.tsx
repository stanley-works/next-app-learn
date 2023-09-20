import React, { CSSProperties } from 'react';
import { Html, Body, Container, Text, Link, Preview,Tailwind } from "@react-email/components";
const WelcomeTemplate = ({name}:{name:String}) => {
    return (
        <Html>
            <Preview>Welcome To Our Word</Preview>
            <Tailwind>
                <Body className='bg-white'>
                    <Container>
                        <Text className='text-6xl'>Hello {name}</Text>
                        <Link href="www.google.com">Google</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
export default WelcomeTemplate
