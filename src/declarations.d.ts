// declarations.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      'auto-rotate'?: boolean | string;
      'camera-controls'?: boolean | string;
      ar?: boolean | string;
      'ar-modes'?: string;
      style?: React.CSSProperties;
    };
  }
}
