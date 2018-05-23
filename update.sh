
composer archive create -t dir -n .
composer network install -c PeerAdmin@hlfv1 -a tomsnetwork1@0.0.2.bna
composer network upgrade -c PeerAdmin@hlfv1 -n tomsnetwork1 -V 0.0.2
composer network ping --card admin@tomsnetwork1
composer-playground
