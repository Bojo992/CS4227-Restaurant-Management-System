export interface UsedInProps {
    open: boolean;
    id: number;
    handleClose: () => void;
}

export interface UsedInInventoryTable {
    handleOpen: (id: number) => void;
    handleOpenOrder: (id: number) => void;
}

export function UsedAmountConverter(amount: number) {
    let result = "";

    if (amount / 1000 < 1) {
        result += amount + " g";
    } else {
        result += (amount / 1000).toFixed(2) + " kg";
    }

    return (result as string);
}