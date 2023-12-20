import styled from 'styled-components';
import { useTheme } from '@mui/material';

export const StyledButton = styled.button`
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    font-size: inherit;
    font-family: ${({ theme }) => theme.typography.primary.fontFamily};
    font-weight: 800;
    color: ${({ theme }) => theme.palette.black.primary};
    text-transform: uppercase;
    padding: 1em 1.5em;
    background: ${({ theme }) => theme.palette.light.primary};
    border: 2px solid ${({ theme }) => theme.palette.black.primary};
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
        background: ${({ theme }) => theme.palette.dark.primary};
        border-radius: inherit;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.black.primary};
        transform: translate3d(0, 0.75em, -1em);
        transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }

    &:hover {
        background: ${({ theme }) => theme.palette.mid.primary};
        transform: translate(0, 0.25em);

        &::before {
            box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.black.primary};
            transform: translate3d(0, 0.5em, -1em);
        }
    }

    &:active {
        background: ${({ theme }) => theme.palette.mid.primary};
        transform: translate(0em, 0.75em);

        &::before {
            box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.black.primary};
            transform: translate3d(0, 0, -1em);
        }
    }
`;

export const StyledCheckbox = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 0.5em;
    font-family: ${({ theme }) => theme.typography.secondary.fontFamily};

    input {
        appearance: none;
        margin-right: 0.5em;
    }

    input:checked + span {
        font-style: italic;
        color: ${({ theme }) => theme.palette.dark.primary};
        text-decoration: line-through;
    }

    input::before {
        content: '\\e835';
        color: ${({ theme }) => theme.palette.black.primary};
    }

    input:checked::before {
        content: '\\e834';
        color: ${({ theme }) => theme.palette.dark.primary};
    }
`;

