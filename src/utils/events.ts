declare global {
    interface Window {
        dataLayer: unknown[];
    }
}

interface Payload {
    [key: string]: string;
}

export const sendDataToGAServices = async (payload: Payload) => {
    try {
        const now = new Date();
        const date = `${now.getFullYear()}-${
            now.getMonth() + 1
        }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

        await fetch(
            "https://script.google.com/macros/s/AKfycbzb5nm5ft5YME7LZXUTkIZQ_esmHfsEH4_DjcrFc7sJrz2CIwZ3nDFEEZ-nCEjvipMO/exec",
            {
                redirect: "follow",
                method: "POST",
                body: JSON.stringify({
                    date,
                    ...payload,
                }),
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
            },
        );
    } catch (error) {
        console.error("Error!", error);
    }
};

export const sendDataToGAServicesWithContacts = async (payload: Payload) => {
    try {
        const now = new Date();
        const date = `${now.getFullYear()}-${
            now.getMonth() + 1
        }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

        await fetch(
            "https://script.google.com/macros/s/AKfycbz6T1Mt1ic9Cw1MJMnpil3z6abAfHJlxkEjmKTndmmaHMLNH6yN6akfB6OEA8hoQeTM9A/exec",
            {
                redirect: "follow",
                method: "POST",
                body: JSON.stringify({
                    date,
                    ...payload,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            },
        );
    } catch (error) {
        console.error("Error!", error);
    }
};