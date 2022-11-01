export default function Input(theme: any): {
    MuiInputBase: {
        styleOverrides: {
            root: {
                '&.Mui-disabled': {
                    '& svg': {
                        color: any;
                    };
                };
            };
            input: {
                '&::placeholder': {
                    opacity: number;
                    color: any;
                };
            };
        };
    };
    MuiInput: {
        styleOverrides: {
            underline: {
                '&:before': {
                    borderBottomColor: any;
                };
            };
        };
    };
    MuiFilledInput: {
        styleOverrides: {
            root: {
                backgroundColor: any;
                '&:hover': {
                    backgroundColor: any;
                };
                '&.Mui-focused': {
                    backgroundColor: any;
                };
                '&.Mui-disabled': {
                    backgroundColor: any;
                };
            };
            underline: {
                '&:before': {
                    borderBottomColor: any;
                };
            };
        };
    };
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: any;
                };
                '&.Mui-disabled': {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: any;
                    };
                };
            };
        };
    };
};
