import React from "react";
import styles from "./horizontalNav.module.scss";
import UnorderedList from '../UnorderedList/UnorderedList';

type Props = {
  logo: any,
  buttonLeft: string,
  buttonRight1: string,
  buttonRight2: string,
  buttonRight3: string,
}

const defaultProps = {
  logo: null,
  buttonLeft: '',
  buttonRight1: '',
  buttonRight2: '',
  buttonRight3: '',
};

export default function HorizontalNav(props: Props) {

  const logo = <li className={styles.navLI} >{props.logo}</li>;

  const leftLi1 = <li className={styles.navLI}>{props.buttonLeft}</li>;

  const rightLi1 = <li className={styles.navLI} >{props.buttonRight1}</li>;
  const rightLi2= <li className={styles.navLI} >{props.buttonRight2}</li>;
  const rightLi3 = <li className={styles.navLI} >{props.buttonRight3}</li>;

  const showRightUL: boolean = props.buttonRight1 || props.buttonRight2 || props.buttonRight3 ? true: false;
  const showLeftUL: boolean = props.logo || props.buttonLeft ? true: false;

  return (
    <header id='header' className={styles.container} >
        <nav id="Nav" className={styles.navMenu}>
          <UnorderedList show={showLeftUL}>
            {props.logo ? logo : null}
            {props.buttonLeft ? leftLi1 : null}
          </UnorderedList>

          <UnorderedList show={showRightUL}>
            {props.buttonRight1 ? rightLi1: null}
            {props.buttonRight2 ? rightLi2: null}
            {props.buttonRight3 ? rightLi3: null}
          </UnorderedList>
        </nav>
    </header>
  );
}

HorizontalNav.defaultProps = defaultProps;