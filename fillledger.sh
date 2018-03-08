curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \ 
   "$class": "org.tompoppe.hyperledger.AccountOwner", \ 
   "BIC": "KREDBEBB" \ 
 }' 'http://localhost:3000/api/AccountOwner'

 curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \ 
   "$class": "org.tompoppe.hyperledger.AccountServicer", \ 
   "BIC": "CITIUS33" \ 
 }' 'http://localhost:3000/api/AccountServicer'

 curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \ 
   "$class": "org.tompoppe.hyperledger.Account", \ 
   "IBAN": "IBAN1234567", \ 
   "description": "My First Account", \ 
   "balance": 0, \ 
   "owner": "KREDBEBB", \ 
   "servicer": "CITIUS33" \ 
 }' 'http://localhost:3000/api/Account'
 