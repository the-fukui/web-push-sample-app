export type DataObject = { [x: string]: any };
export type AddDocument = ({ collectionPath, data }: { collectionPath: string; data: DataObject }) => Promise<string>;
