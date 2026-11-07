import classes from './typography.module.css'

export interface TypographyProps {
    variant: "h1" | "h2" | "regular" | "regular-bold" | "regular-gray";
    text: string;
}

export default function Typography({
    variant = "regular",
    text
}: TypographyProps) {
    const getClasses = () => `${classes.typography} ${classes[`typography--${variant}`]}`

    switch (variant) {
        case "h1":
            return <h1 className={getClasses()}>{text}</h1>
        case "h2":
            return <h2 className={getClasses()}>{text}</h2>
        case "regular":
        case "regular-bold":
        case "regular-gray":
            return <p className={getClasses()}>{text}</p>
    }
}