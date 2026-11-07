import { type PropsWithChildren } from "react";
import { Button } from "../button/Button";

export interface FormProps extends PropsWithChildren<{
    header?: React.ReactElement;
    footer?: React.ReactElement;
}> { }

function DefaultFooter() {
    return (
        <section><Button kind="primary" label="Submit" type="submit" /></section>
    )
}

export default function Form({
    header = <></>,
    footer,
    children
}: FormProps) {
    return (
        <form>
            {header}
            <section>
                {children}
            </section>
            {footer ?? <DefaultFooter />}
        </form>
    )
}