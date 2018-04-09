composer archive create -t dir -n .
composer network install -c PeerAdmin@hlfv1 -a tomsnetwork1@0.0.1.bna
composer network start --networkName tomsnetwork1 --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
composer card import --file networkadmin.card
composer network ping --card admin@tomsnetwork1
