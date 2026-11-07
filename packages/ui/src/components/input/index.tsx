import classes from './input.module.css'

// export interface InputProps {
//     type: 'text' | 'email' | 'password';
//     disabled: boolean;
//     placeholder?: string;
// }

export interface InputProps extends Partial<
    Pick<React.HTMLProps<HTMLInputElement>, 'type' | 'disabled' | 'placeholder'>
> { }

export default function Input({
    placeholder = '',
    disabled = false,
    type = 'text',
}: InputProps) {
    return (
        <input type={type} className={classes.input} disabled={disabled} placeholder={placeholder} />
    )
}