namespace Utility{
    export namespace Taxes{
        export function calculateIva(price: number):number{
            return price * (price * 0.21)
        }

        export function calculatePenaltyIva(price: number):number{
            return price * (price * 0.30)
        }
    }
}