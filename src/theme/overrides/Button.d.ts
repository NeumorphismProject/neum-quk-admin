export default function Button(theme: any): {
    MuiButton: {
        styleOverrides: {
            root: {
                '&:hover': {
                    boxShadow: string;
                };
            };
            sizeLarge: {
                height: number;
            };
            containedInherit: {
                color: any;
                boxShadow: any;
                '&:hover': {
                    backgroundColor: any;
                };
            };
            containedPrimary: {
                boxShadow: any;
            };
            containedSecondary: {
                boxShadow: any;
            };
            outlinedInherit: {
                border: string;
                '&:hover': {
                    backgroundColor: any;
                };
            };
            textInherit: {
                '&:hover': {
                    backgroundColor: any;
                };
            };
        };
    };
};
