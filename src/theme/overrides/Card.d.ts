export default function Card(theme: any): {
    MuiCard: {
        styleOverrides: {
            root: {
                boxShadow: any;
                borderRadius: number;
                position: string;
                zIndex: number;
            };
        };
    };
    MuiCardHeader: {
        defaultProps: {
            titleTypographyProps: {
                variant: string;
            };
            subheaderTypographyProps: {
                variant: string;
            };
        };
        styleOverrides: {
            root: {
                padding: any;
            };
        };
    };
    MuiCardContent: {
        styleOverrides: {
            root: {
                padding: any;
            };
        };
    };
};
