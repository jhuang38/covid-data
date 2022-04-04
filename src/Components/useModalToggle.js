import {useState} from 'react';

export default function useModalToggle() {
    const [modalState, setModalState] = useState(false);
    const open = () => setModalState(true);
    const close = () => setModalState(false);
    return [modalState, open, close];
}