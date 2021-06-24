import { ServerStyleSheet } from 'styled-components'

const sheet = new ServerStyleSheet()

import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        try {
            const page = ctx.renderPage((App) => (props) =>
                sheet.collectStyles(<App {...props} />)
            );
            const initialProps: any = await Document.getInitialProps(ctx);
            const styles = [
                ...initialProps.styles,
                ...sheet.getStyleElement(),
            ];
            return {
                ...page,
                styles,
            };
        } finally {
            sheet.seal();
        }
    }
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument