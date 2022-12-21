import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'; 

import icon from '../images/cryptocurrency.png'
import CryptoDetails from './CryptoDetails';


const Navbar = () => {
    const navigate = useNavigate();
    const menuItems = [
        {
            key: '/',
            icon: <HomeOutlined />,
            label: 'Home',
        },
        {
            key: '/cryptocurrencies',
            icon: <FundOutlined />,
            label: 'Cryptocurrencies',
        },
        {
            key: '/exchanges',
            icon: <MoneyCollectOutlined />,
            label: 'Exchanges',
        },
        {
            key: '/news',
            icon: <BulbOutlined />,
            label: 'Crypto News',
        },
    ];
  return (
    <div className='nav-container'>
        <div className="logo-container">
            <Avatar src={icon} size='large' />
            <Typography.Title level={2} className='logo'>
                <Link to='/'> Cryptosium </Link>
            </Typography.Title>
        </div>
        <Menu theme='dark' 
            items={menuItems} 
            onClick={({key})=>{
                navigate(key);
            }} 
        />
    </div>
  )
}

export default Navbar