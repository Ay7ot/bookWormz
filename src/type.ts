export type AppContextType = {
    books : bookType[],
    dispatch: React.Dispatch<AppActionType>
    query: string;
    currentBook : bookInfo | null
}

export type bookType = {
    authors: string;
    id: string;
    image: string;
    subtitle: string;
    title: string;
    url: string;
}

export type AppActionType = {
    type: string;
    payload? : {
        booksPayload?: bookType[],
        queryPayload?: string
    }
}

export type bookInfo = {
    status: string;
    id: string;
    title: string;
    subtitle: string;
    description: string;
    authors: string;
    publisher: string;
    pages: string;
    year: string;
    image: string;
    url: string;
    download: string;
}
