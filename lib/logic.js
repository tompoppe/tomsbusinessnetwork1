/**
 * Credit account 
 * @param {org.tompoppe.hyperledger.CreditAccount} tx 
 * @transaction
 */
function creditAccount(tx) {
    tx.account.balance = tx.account.balance + tx.movement;
    return getAssetRegistry('org.tompoppe.hyperledger.Account')
        .then(function (assetRegistry) {
            factory = getFactory()
            let newEvent = factory.newEvent('org.tompoppe.hyperledger', 'newCredit');
            emit(newEvent);
            console.log("event emitted " + newEvent);
            return assetRegistry.update(tx.account);
        });
}

/**
 * debit account 
 * @param {org.tompoppe.hyperledger.DebitAccount} tx 
 * @transaction
 */
function debitAccount(tx) {
    tx.account.balance = tx.account.balance - tx.movement;
    return getAssetRegistry('org.tompoppe.hyperledger.Account')
        .then(function (assetRegistry) {
            factory = getFactory()
            let newEvent = factory.newEvent('org.tompoppe.hyperledger', 'newDebit');
            emit(newEvent);
            console.log("event emitted " + newEvent);
            return assetRegistry.update(tx.account);
        });
}

/**
 * create message event 
 * @param {org.tompoppe.hyperledger.CreateMessageEvent} tx
 * @transaction
 */
function createMessageEvent(tx) {
    factory = getFactory()
    let newEvent = factory.newEvent('org.tompoppe.hyperledger', 'newMessage', tx.uuid);
    emit(newEvent);
    console.log("event emitted " + newEvent);
}

