export interface Post {
    slug:string,
    date:string,
    thumbnail:string,
    title:string,
    description:string,
    prerequisites:string[],
    stacks:string[],
    includeStructuredData: boolean,
    headData: {
        keywords: string,
        pageURL: string,
        type: string,
        datetime: string,
        image: string,
    }
    structuredDataType: string,
    structuredDataTypeTitle: string,
    structuredDataID: string,
    category: string
}