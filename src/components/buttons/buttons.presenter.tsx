import {ComponentProps, ReactNode} from "react";
import Styles from "./buttons.module.scss";

type props = {
  children: ReactNode
  className?: string;
}

const PrimaryButton = (props:ComponentProps<'button'>) => {
  return <button {...props} className={`${Styles.button} ${Styles.primary} ${props.className}`}>{props.children}</button>;
}

const SecondlyButton = (props:ComponentProps<'button'>) => {
  return <button {...props} className={`${Styles.button} ${Styles.secondly} ${props.className}`}>{props.children}</button>;
}

export {PrimaryButton,SecondlyButton};