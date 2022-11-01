export default function Backdrop(theme: any): {
    MuiBackdrop: {
        styleOverrides: {
            root: {
                background: string[];
                '&.MuiBackdrop-invisible': {
                    background: string;
                };
            };
        };
    };
};
