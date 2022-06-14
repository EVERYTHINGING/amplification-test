import { AmountOfLove as TAmountOfLove } from "../api/amountOfLove/AmountOfLove";

export const AMOUNTOFLOVE_TITLE_FIELD = "id";

export const AmountOfLoveTitle = (record: TAmountOfLove): string => {
  return record.id || record.id;
};
