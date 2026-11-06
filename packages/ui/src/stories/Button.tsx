import React from 'react';

import './button.css';

export interface ButtonProps {
  /** Тип кнопки */
  kind: "primary" | "outlined" | "danger";
  /** Иконка кнопки*/
  icon?: React.ReactElement;
  /** Размер кнопки*/
  size?: 'default' | 'large';
  /** Текст кнопки */
  label: string;
  /** Обработчик кликов */
  onClick?: () => void;
  /** CSS-стили */
  style?: React.CSSProperties;
  /** Состояние */
  disabled?: boolean
}

/** Основной UI-компонент для пользовательских взаимодействий */
export const Button = ({
  kind,
  icon,
  size = 'default',
  label,
  disabled = false,
  style = {}
}: ButtonProps) => {
  const mode = kind === "primary"
    ? 'storybook-button--primary'
    : kind === "outlined" 
      ? 'storybook-button--outlined' 
      : 'storybook-button--danger';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={style}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
