export type AppContextType = {
    books : bookType[],
    dispatch: React.Dispatch<AppActionType>
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
        booksPayload: bookType[]
    }
}