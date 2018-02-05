composer runtime install --card PeerAdmin@hlfv1 --businessNetworkName tomsnetwork1
composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile tomsnetwork1@0.0.1.bna --file networkadmin.card
composer card import --file networkadmin.card
composer network ping --card admin@tomsnetwork1
