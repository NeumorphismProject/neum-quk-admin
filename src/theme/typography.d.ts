export default typography;
declare namespace typography {
    export { FONT_PRIMARY as fontFamily };
    export const fontWeightRegular: number;
    export const fontWeightMedium: number;
    export const fontWeightBold: number;
    export const h1: {
        '@media (min-width:600px)': {
            fontSize: string;
        };
        '@media (min-width:900px)': {
            fontSize: string;
        };
        '@media (min-width:1200px)': {
            fontSize: string;
        };
        fontWeight: number;
        lineHeight: number;
        fontSize: string;
    };
    export const h2: {
        '@media (min-width:600px)': {
            fontSize: string;
        };
        '@media (min-width:900px)': {
            fontSize: string;
        };
        '@media (min-width:1200px)': {
            fontSize: string;
        };
        fontWeight: number;
        lineHeight: number;
        fontSize: string;
    };
    export const h3: {
        '@media (min-width:600px)': {
            fontSize: string;
        };
        '@media (min-width:900px)': {
            fontSize: string;
        };
        '@media (min-width:1200px)': {
            fontSize: string;
        };
        fontWeight: number;
        lineHeight: number;
        fontSize: string;
    };
    export const h4: {
        '@media (min-width:600px)': {
            fontSize: string;
        };
        '@media (min-width:900px)': {
            fontSize: string;
        };
        '@media (min-width:1200px)': {
            fontSize: string;
        };
        fontWeight: number;
        lineHeight: number;
        fontSize: string;
    };
    export const h5: {
        '@media (min-width:600px)': {
            fontSize: string;
        };
        '@media (min-width:900px)': {
            fontSize: string;
        };
        '@media (min-width:1200px)': {
            fontSize: string;
        };
        fontWeight: number;
        lineHeight: number;
        fontSize: string;
    };
    export const h6: {
        '@media (min-width:600px)': {
            fontSize: string;
        };
        '@media (min-width:900px)': {
            fontSize: string;
        };
        '@media (min-width:1200px)': {
            fontSize: string;
        };
        fontWeight: number;
        lineHeight: number;
        fontSize: string;
    };
    export namespace subtitle1 {
        const fontWeight: number;
        const lineHeight: number;
        const fontSize: string;
    }
    export namespace subtitle2 {
        const fontWeight_1: number;
        export { fontWeight_1 as fontWeight };
        const lineHeight_1: number;
        export { lineHeight_1 as lineHeight };
        const fontSize_1: string;
        export { fontSize_1 as fontSize };
    }
    export namespace body1 {
        const lineHeight_2: number;
        export { lineHeight_2 as lineHeight };
        const fontSize_2: string;
        export { fontSize_2 as fontSize };
    }
    export namespace body2 {
        const lineHeight_3: number;
        export { lineHeight_3 as lineHeight };
        const fontSize_3: string;
        export { fontSize_3 as fontSize };
    }
    export namespace caption {
        const lineHeight_4: number;
        export { lineHeight_4 as lineHeight };
        const fontSize_4: string;
        export { fontSize_4 as fontSize };
    }
    export namespace overline {
        const fontWeight_2: number;
        export { fontWeight_2 as fontWeight };
        const lineHeight_5: number;
        export { lineHeight_5 as lineHeight };
        const fontSize_5: string;
        export { fontSize_5 as fontSize };
        export const letterSpacing: number;
        export const textTransform: string;
    }
    export namespace button {
        const fontWeight_3: number;
        export { fontWeight_3 as fontWeight };
        const lineHeight_6: number;
        export { lineHeight_6 as lineHeight };
        const fontSize_6: string;
        export { fontSize_6 as fontSize };
        const textTransform_1: string;
        export { textTransform_1 as textTransform };
    }
    export namespace sidebar {
      const fontWeight_4: number;
        export { fontWeight_4 as fontWeight };
      const fontSize_7: string;
      export { fontSize_7 as fontSize };
    }
    export namespace label {
      const fontWeight_5: number;
        export { fontWeight_5 as fontWeight };
      const fontSize_8: string;
      export { fontSize_8 as fontSize };
    }
}
declare const FONT_PRIMARY: "Public Sans, sans-serif";
