// src/declarations.d.ts
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module 'pdfmake/build/vfs_fonts' {
    export const pdfFonts: any;
}

declare module 'pdfmake/build/vfs_fonts' {
    const pdfFonts: any;
    export default pdfFonts;
}
