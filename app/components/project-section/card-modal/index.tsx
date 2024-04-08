import React, { useEffect, useRef } from 'react';

interface CardModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: React.ReactNode;
}

const CardModal: React.FC<CardModalProps> = ({ isOpen, onClose, content }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-80" onClick={onClose} />
            <div ref={modalRef} className="relative bg-white rounded-lg shadow-lg z-50 overflow-y-auto">
                {content}
            </div>
        </div>
    );
};

export default CardModal;
