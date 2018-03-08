/**
 * Credit account 
 * @param {org.tompoppe.hyperledger.CreditAccount} tx - the trade to be processed
 * @transaction
 */
function creditAccount(tx) {
    tx.account.balance = tx.account.balance + tx.movement;
    return getAssetRegistry('org.tompoppe.hyperledger.Account')
        .then(function (assetRegistry) {
            return assetRegistry.update(tx.account);
        });
}

/**
 * debit account 
 * @param {org.tompoppe.hyperledger.DebitAccount} debit - the trade to be processed
 * @transaction
 */
function debitAccount(tx) {
    tx.account.balance = tx.account.balance - tx.movement;
    return getAssetRegistry('org.tompoppe.hyperledger.Account')
        .then(function (assetRegistry) {
            return assetRegistry.update(tx.account);
        });
}