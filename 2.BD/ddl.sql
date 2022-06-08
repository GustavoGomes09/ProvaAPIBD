create database superHeroiDB;
use superHeroiDB;

create table tb_super_heroi (
	id_super_heroi		int primary key auto_increment,
    nm_super_heroi		varchar(100),
    ds_super_poderes	varchar(100),
    bt_voa				boolean
);