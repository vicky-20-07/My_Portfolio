import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

export default function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const goToButton = () => {
        window.scrollTo({ top: 0, left: 0 });
    };
    const listenToScroll = () => {
        let heightToHidden = 250;
        const WinScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (WinScroll > heightToHidden) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll',listenToScroll);
    },[]);
    return (
        <Wrapper>
            {isVisible && (
            <div className='top-btn' onClick={goToButton}>
                <FaArrowUp className='btn' />
            </div>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .top-btn {
        font-size: 1.2rem;
        width: 3rem;
        height: 3rem;
        background-color: #13C779;
        border-radius: 50%;
        position: fixed;
        z-index: 999;
        bottom: 5rem;
        right: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &--icon {
            animation: gototop 1.2s linear infinite alternate-reverse;
        }

        @keyframes gototop {
            0% {
                transform: translateY(-0.5rem);
            }
            100% {
                transform: translateY(1rem);
            }
        }
    }
`