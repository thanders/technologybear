import React, {useState, useRef } from "react"
import styles from './collapsable.module.scss';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


type CollapsableProps = {
    primary: string,
    children: JSX.Element;
};

const elements = [
    {
        primary: 'Domain 1: Cloud Concepts',
    },
    {
        primary: 'Domain 2: Security and Compliance',
        
    },
    {
        primary: 'Domain 3: Technology',
        
    },
    {
        primary: 'Domain 4: Billing and Pricing', 
    }
];

export default function Collapsable({primary, children}: CollapsableProps): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean | undefined>(false);
    const handleFilterOpening = () => {
        setIsOpen(!isOpen);
      };
      const inputRef = useRef(null);
    return (
        <div
            className={styles.container}
            onClick={handleFilterOpening}
            onKeyPress={(e) => {
                if (e.key === "Enter") handleFilterOpening;
            }}
        >
            <div className={styles.primary} tabIndex={2}>
                {primary}
                {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            {isOpen ? <div className={styles.children} onClick={(e) => e.stopPropagation()}>{children}</div> : null}
        </div>
    );
}