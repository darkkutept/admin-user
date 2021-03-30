export interface NavStore {
    isExpanded: boolean;
    expandableItems: IExpandableItem[];
}

export interface IExpandableItem
{
   key: string | undefined;
   isExpanded: boolean | undefined;
}