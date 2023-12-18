import styled from 'styled-components';
import {useTheme} from '@mui/material';

export const StyledButton = styled.button`
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    font-size: inherit;
    font-family: ${({ theme }) => theme.typography.primary.fontFamily};    font-weight: 800;
    color: #1A0000;
    text-transform: uppercase;
    padding: 1em 1.5em;
    background: #F5EDCE;
    border: 2px solid #1A0000;
    border-radius: 0.75em;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);

    &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #7AA3C1;
        border-radius: inherit;
        box-shadow: 0 0 0 2px #1A0000;
        transform: translate3d(0, 0.75em, -1em);
        transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }

    &:hover {
        background: #89C4E1;
        transform: translate(0, 0.25em);

        &::before {
            box-shadow: 0 0 0 2px #1A0000;
            transform: translate3d(0, 0.5em, -1em);
        }
    }

    &:active {
        background: #89C4E1;
        transform: translate(0em, 0.75em);

        &::before {
            box-shadow: 0 0 0 2px #1A0000;
            transform: translate3d(0, 0, -1em);
        }
    }
`;
