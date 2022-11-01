export default palette;
declare namespace palette {
    export namespace common {
        const black: string;
        const white: string;
    }
    export namespace appBar {
      const backgroundColor: string;
    }
    export namespace primary {
        const bright: string;
        const lighter: string;
        const light: string;
        const main: string;
        const dark: string;
        const darker: string;
        const contrastText: string;
    }
    export namespace secondary {
        const lighter_1: string;
        export { lighter_1 as lighter };
        const light_1: string;
        export { light_1 as light };
        const main_1: string;
        export { main_1 as main };
        const dark_1: string;
        export { dark_1 as dark };
        const darker_1: string;
        export { darker_1 as darker };
        const contrastText_1: string;
        export { contrastText_1 as contrastText };
    }
    export namespace info {
        const lighter_2: string;
        export { lighter_2 as lighter };
        const light_2: string;
        export { light_2 as light };
        const main_2: string;
        export { main_2 as main };
        const dark_2: string;
        export { dark_2 as dark };
        const darker_2: string;
        export { darker_2 as darker };
        const contrastText_2: string;
        export { contrastText_2 as contrastText };
    }
    export namespace success {
        const lighter_3: string;
        export { lighter_3 as lighter };
        const light_3: string;
        export { light_3 as light };
        const main_3: string;
        export { main_3 as main };
        const dark_3: string;
        export { dark_3 as dark };
        const darker_3: string;
        export { darker_3 as darker };
        const contrastText_3: string;
        export { contrastText_3 as contrastText };
    }
    export namespace warning {
        const lighter_4: string;
        export { lighter_4 as lighter };
        const light_4: string;
        export { light_4 as light };
        const main_4: string;
        export { main_4 as main };
        const dark_4: string;
        export { dark_4 as dark };
        const darker_4: string;
        export { darker_4 as darker };
        const contrastText_4: string;
        export { contrastText_4 as contrastText };
    }
    export namespace error {
        const lighter_5: string;
        export { lighter_5 as lighter };
        const light_5: string;
        export { light_5 as light };
        const main_5: string;
        export { main_5 as main };
        const dark_5: string;
        export { dark_5 as dark };
        const darker_5: string;
        export { darker_5 as darker };
        const contrastText_5: string;
        export { contrastText_5 as contrastText };
    }
    export { GREY as grey };
    export { GRADIENTS as gradients };
    export { CHART_COLORS as chart };
    export const divider: string;
    export namespace text {
        const primary_1: string;
        export { primary_1 as primary };
        const secondary_1: string;
        export { secondary_1 as secondary };
        export const disabled: string;
        export const background: string;
    }
    export namespace background {
        export const paper: string;
        const _default: string;
        export { _default as default };
        export const neutral: string;
    }
    export namespace action {
        export const active: string;
        export const hover: string;
        export const selected: string;
        const disabled_1: string;
        export { disabled_1 as disabled };
        export const disabledBackground: string;
        export const focus: string;
        export const hoverOpacity: number;
        export const disabledOpacity: number;
    }
}
declare const GREY: {
    0: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    5008: string;
    50012: string;
    50016: string;
    50024: string;
    50032: string;
    50048: string;
    50056: string;
    50080: string;
};
declare namespace GRADIENTS {
    const primary_2: string;
    export { primary_2 as primary };
    const info_1: string;
    export { info_1 as info };
    const success_1: string;
    export { success_1 as success };
    const warning_1: string;
    export { warning_1 as warning };
    const error_1: string;
    export { error_1 as error };
    const light_6: string;
    export { light_6 as light };
}
declare namespace CHART_COLORS {
    const violet: string[];
    const blue: string[];
    const green: string[];
    const yellow: string[];
    const red: string[];
}
