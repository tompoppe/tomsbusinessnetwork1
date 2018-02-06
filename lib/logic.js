/**
 * Credit account 
 * @param {org.tompoppe.hyperledger.Credit} credit - the trade to be processed
 * @transaction
 */
function creditAccount(credit) {
    credit.account.balance = credit.account.balance + credit.movement;
    return getAssetRegistry('org.tompoppe.hyperledger.Credit')
        .then(function (assetRegistry) {
            return assetRegistry.update(credit.account);
        });
}

/**
 * debit account 
 * @param {org.tompoppe.hyperledger.Debit} debit - the trade to be processed
 * @transaction
 */
function debitAccount(debit) {
    debit.account.balance = debit.account.balance - debit.movement;
    return getAssetRegistry('org.tompoppe.hyperledger.Debit')
        .then(function (assetRegistry) {
            return assetRegistry.update(debit.account);
        });
}